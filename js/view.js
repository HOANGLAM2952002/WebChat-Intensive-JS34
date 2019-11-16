const view = {}

view.showComponent = function(name) {
    switch(name) {
        case 'register': {
            let app = document.getElementById('app')
            app.innerHTML = components.register

            let link = document.getElementById('register-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('register-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('login')
            }

            function formSubmitHandler(event) {
                event.preventDefault() 
                // lay thong tin user
                let registerInfo = {
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value,
                }

                // validate thong tin 
                let conditionArray = []
                let idErrorTagArray = []
                let messageErrorArray = []

                /** set values Pass truoc, Confirm Pass sau*/
                let conditionPass0 = registerInfo.password //0
                let conditionPass1 = registerInfo.password.length >= 6 //1
                let conditionConfirmPass0 = registerInfo.confirmPassword //2
                let conditionConfirmPass1 = registerInfo.confirmPassword == registerInfo.password //3
                let idErrorTagPass = "password-error" //0
                let idErrorTagConfirmPass = "confirmPassword-error" //1
                let messageErrorPass0 = "Password must be at least 6 characters" //0
                let messageErrorPass1 = "Must type Password" //1
                let messageErrorConfirmPass0 = "Password not match" //2
                let defaultMessageError = ""
                
                /** push into array using splice*/
                conditionArray.splice(0,1,conditionPass0)
                conditionArray.splice(1,1,conditionPass1)
                conditionArray.splice(2,1,conditionConfirmPass0)
                conditionArray.splice(3,1,conditionConfirmPass1)
                idErrorTagArray.splice(0,1,idErrorTagPass)
                idErrorTagArray.splice(1,1,idErrorTagConfirmPass)
                messageErrorArray.splice(0,1,messageErrorPass0)
                messageErrorArray.splice(1,1,messageErrorPass1)
                messageErrorArray.splice(2,1,messageErrorConfirmPass0)

                let validateResult = [
                    view.validate(registerInfo.firstName, "firstname-error", "Invalid first name"),
                    view.validate(registerInfo.lastName, "lastname-error", "Invalid last name"),
                    view.validate(registerInfo.email 
                        && registerInfo.email.includes('@'), 
                        "email-error", 
                        "Invalid email"),
                    view.validateTest(conditionArray,idErrorTagArray,messageErrorArray, defaultMessageError)
                ]

                // submit information
                console.log(validateResult)
                console.log(registerInfo)
                if (allPassed(validateResult)) {
                    controller.register(registerInfo)
                }
            }
            break
        }
        case 'login': {
            let app = document.getElementById('app')
            app.innerHTML = components.login

            let link = document.getElementById('login-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('login-form')
            form.onsubmit = formSubmitHandler
            //form.onsubmit = alert("You have submitted")
            function linkClickHandler() {
                view.showComponent('register')
            }

            function formSubmitHandler(event) {
                event.preventDefault()
                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value,
                }

                let validateResult = [
                    view.validate(loginInfo.email 
                        && loginInfo.email.includes('@'), 
                        "email-error", 
                        "Invalid email"),
                    view.validate(loginInfo.password 
                    && loginInfo.password.length >= 6,
                        "password-error",
                        "Incorrect Password")
                ]
                console.log(validateResult)
                if(allPassed(validateResult)){
                    controller.login(loginInfo)
                }
            }
            
            break
        }
        case 'chat': {
            let app = document.getElementById('app')
            app.innerHTML = components.nav + components.chat 

            controller.loadConversations()
            controller.setupDatabaseChange()

            // profile email 
            view.setText('user-email', firebase.auth().currentUser.displayName)

            let btnSignOut = document.getElementById('sign-out-btn')
            btnSignOut.onclick = signOut 

            let formChat = document.getElementById('form-chat')
            formChat.onsubmit = formChatSubmitHandler

            let formAddConversation = document.getElementById('form-add-conversation')
            formAddConversation.onsubmit = formAddConversationSubmitHandler

            function formChatSubmitHandler(event){
                event.preventDefault()
                let messageContent = formChat.message.value.trim()
                if (messageContent) {
                    controller.addMessage(messageContent)
                }
            }

            function formAddConversationSubmitHandler(event){
                event.preventDefault()
                // 1. get Info
                let title = formAddConversation.title.value
                let friendEmail = formAddConversation.friendEmail.value
                // 2. validate info
                let validateResult = [
                view.validate(title, 'title-error', "Title required"),
                view.validate(friendEmail, 'friend-email-error', "Friend email required")]
                // 3. submit info
                if (allPassed(validateResult)){
                    controller.addConversation(title,friendEmail)
                }
            }

            function signOut(){
                firebase.auth().signOut()
            }
            break
        }
        case 'loading': {
            let app = document.getElementById('app')
            app.innerHTML = components.loading
        }
    }
}

view.showCurrentConversation = function() {
    if(model.currentConversation) {
        let message = model.currentConversation.message
        let listMessages = document.getElementById('list-messages')
        listMessages.innerHTML = ""
        for(let singleMessage of message){
            let className = ""
            if (singleMessage.owner == firebase.auth().currentUser.email){
                className = "message-chat your"
            } else {
                className = "message-chat"
            }
            let html = `
                <div class="${className}">
                    <span>${singleMessage.content}</span>
                <div>
            `   
            listMessages.innerHTML += html
        }
        listMessages.scrollTop = listMessages.scrollHeight
    }
}
view.showConversations = function(){
    if (model.conversations){
        let conversations = model.conversations
        let listConversations = document.getElementById('list-conversations')
        listConversations.innerHTML = ""
        // show html
        for (let conversation of conversations){
            let className = ""
            // 1. mark current coversation
            if (conversation.id == model.currentConversation.id) {
                className = "conversation current"
            } else {
                className = "conversation"
            }
            // 2. conversation.onclick
            let html = `
                <div id="${conversation.id}" class="${className}">
                    <div class="conversation-title">${conversation.title}</div>
                    <div class="conversation-members">${conversation.users.length} Members</div>
                </div>`
            listConversations.innerHTML += html
        }
        // add event click
        for (let conversation of conversations){
            let conversationDiv = document.getElementById(conversation.id)
            conversationDiv.onclick = conversationClickHandler
            function conversationClickHandler() {
                model.saveCurrentConversation(conversation)
                view.showCurrentConversation()
                view.showConversations()
            }
        }
    }
}
view.setText = function(id, text){
    document.getElementById(id).innerText = text
}
view.validate = function(condition, idErrorTag, messageError){
    if (condition){
        view.setText(idErrorTag,'')
        return true
    } else {
        view.setText(idErrorTag, messageError)
        return false
    }
}
view.validateTest = function(conditionArray, idErrorTagArray, messageErrorArray, defaultMessageError) {
    if (conditionArray[0]){
        view.setText(idErrorTagArray[0],defaultMessageError)
        if (conditionArray[1]){
            if (conditionArray[2] && conditionArray[3]) {
                view.setText(idErrorTagArray[1], defaultMessageError)
                return true
            } else {
                view.setText(idErrorTagArray[1], messageErrorArray[2])
            }
        } else {
            view.setText(idErrorTagArray[0], messageErrorArray[0])
        }
        return false
    } else {
        if (conditionArray[2]){
            view.setText(idErrorTagArray[0],messageErrorArray[1])
            view.setText(idErrorTagArray[1],messageErrorArray[2])
        } else {
            view.setText(idErrorTagArray[0],messageErrorArray[1])
        }
        return false
    }
}
function allPassed(validateResult) {
    for (let validate of validateResult){
        if (!validate){
            return false
        }
    }
    return true
}
view.disable = function(id){
    document.getElementById(id).setAttribute('disabled', true)
}
view.enable = function(id){
    document.getElementById(id).removeAttribute('disabled')
}
