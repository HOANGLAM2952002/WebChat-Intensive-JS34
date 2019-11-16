window.onload = init
function init() {
    view.showComponent('loading')
    firebase.auth().onAuthStateChanged(authStateChangedHandler)

    function authStateChangedHandler(user) {
        if (user && user.emailVerified){
            view.showComponent('chat')
        } else {
            view.showComponent('login')
        }
    }
}

