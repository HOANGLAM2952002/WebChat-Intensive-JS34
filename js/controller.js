const controller = {}


controller.register = async function(registerInfo){
    let email = registerInfo.email
    let password = registerInfo.password
    let displayName = registerInfo.lastName + ' ' + registerInfo.firstName
    view.setText('register-succeed', '')
    view.setText('register-error', '')
    
    view.disable('register-submit-btn')
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
        displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-succeed', 'An email verification has been sent to your email')
    } catch (error) {
        view.setText('register-error', error.message)
    }
    view.enable('register-submit-btn')
} 

controller.login = async function(loginInfo){
    let email = loginInfo.email
    let password = loginInfo.password
    view.setText('login-error', '')
    view.disable('login-submit-btn')
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        if (!result.user.emailVerified) {
            throw new Error('You must verify email')
        }
    } catch (error) {
        view.setText('login-error', error.message)
        view.enable('login-submit-btn')
    }
}
controller.loadConversations = async function() {
    let currentEmail = firebase.auth().currentUser.email
    let result = await firebase.firestore()
    .collection('conversations').where('users','array-contains',currentEmail)
    .get()
    let docs = result.docs
    // 1. transform conversation
    // let conversations = []
    // for (let doc of docs) {
    //     let conversation = transformDoc(doc)
    //     conversations.push(conversation)
    // }
    let conversations = docs.map(transformDoc)
    // 2. save data to model
    model.saveConversations(conversations)
    if(conversations.length) {
        let currentConversation = conversations[0]
        model.saveCurrentConversation(currentConversation)
    }
    console.log(model)
    // 3. show data to view
    view.showCurrentConversation()
    view.showConversations()
}

controller.addMessage = async function(messageContent) {
    let message = {
        content: messageContent,
        owner: firebase.auth().currentUser.email,
        createdAt: new Date().toISOString()
    }
    view.disable('form-chat-submit-btn')
    if(model.currentConversation) {
        await firebase.firestore()
            .collection('conversations')
            .doc(model.currentConversation.id)
            .update({
                message: firebase.firestore.FieldValue.arrayUnion(message)
            })
        document.getElementById('form-chat-input').value = ""
        //view.setText('form-chat-input',"")
    }
    view.enable('form-chat-submit-btn')
}

controller.addConversation = async function(title, friendEmail){
    view.disable('form-add-conversation-submit-btn')
    try {
        // 1. lock submit on progress
        // 2. clear input value after proceed
        // form-add-conversation-title-input
        // form-add-conversation-friend-email-input 
        let conversation = {
            title: title,
            users: [firebase.auth().currentUser.email, friendEmail],
            message: [],
            createdAt: new Date().toISOString()
        }
        await firebase.firestore().collection('conversations').add(conversation)
        view.enable('form-add-conversation-submit-btn')
        document.getElementById('form-add-conversation-title-input').value = ""
        document.getElementById('form-add-conversation-friend-email-input').value = ""
    } catch (error){
        view.validate(friendEmail, 'friend-email-error', error.message)
    }
}
controller.setupDatabaseChange = function() {
    let isFirstTimeRun = true
    let currentEmail = firebase.auth().currentUser.email
    firebase.firestore()
        .collection('conversations')
        .where('users','array-contains',currentEmail)
        .onSnapshot(snapShotHandler)

    function snapShotHandler(snapshot) {
        if (isFirstTimeRun) {
            isFirstTimeRun = false
            return
        }
        let docChanges = snapshot.docChanges()
        for (let docChange of docChanges) {
            let conversation = transformDoc(docChange.doc)
            if(docChange.type == 'added' || docChange.type == 'modified'){
                model.updateConversation(conversation)
                if (model.currentConversation && model.currentConversation.id == conversation.id){
                    view.showCurrentConversation()
                }
            }
        }

        // docChange.type == 'removed >> not yet support >> TODO
        console.log('database changed')
        view.showConversations()
    }
}

function transformDoc(firestoreDoc) {
    let data = firestoreDoc.data()
    data.id = firestoreDoc.id
    return data
}