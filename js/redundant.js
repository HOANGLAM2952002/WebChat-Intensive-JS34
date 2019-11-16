// XU LY PASSWORD CACH DON GIAN
    view.validate(registerInfo.password 
    && registerInfo.password.length >= 6, 
    "password-error", 
    "Invalid password")

    view.validate(registerInfo.confirmPassword 
    && registerInfo.confirmPassword.length >= 6 
    && registerInfo.confirmPassword == registerInfo.password,
    "confirmPassword-error",
    "Password not match")

// XU LY PASSWORD CACH 1
if (registerInfo.password 
    && registerInfo.password.length >= 6){
    view.setText("password-error", "")
    if (registerInfo.confirmPassword 
        && registerInfo.confirmPassword.length >= 6 
        && registerInfo.confirmPassword == registerInfo.password){
        view.setText("confirmPassword-error", "")
    } else {
        view.setText("confirmPassword-error","Password not match")
    }
} else {
    view.setText("password-error","Invalid password")
}

// XU LY PASSWORD CACH 2 (CHI XU LY DUOC 1 LAN DO CHUA XU LY Array)
let conditionArray = []
let idErrorTagArray = []
let messageErrorArray = []
view.validateTest = function(conditionArray, idErrorTagArray, messageErrorArray, defaultMessageError) {
    if (conditionArray[0]){
        view.setText(idErrorTagArray[0],defaultMessageError)
        if (conditionArray[1]){
            if (conditionArray[2] && conditionArray[3]) {
                view.setText(idErrorTagArray[1], defaultMessageError)
                return true
            } else {
                view.setText(idErrorTagArray[1], messageErrorArray[2])
                return false
            }
        } else {
            view.setText(idErrorTagArray[0], messageErrorArray[0])
            return false
        }
    } else {
        if (conditionArray[2]){
            view.setText(idErrorTagArray[0],messageErrorArray[1])
            view.setText(idErrorTagArray[1],messageErrorArray[2])
            return true
        } else {
            view.setText(idErrorTagArray[0],messageErrorArray[1])
            return false
        }
    }
}

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

/** push into array */
conditionArray.push(conditionPass0)
conditionArray.push(conditionPass1)
conditionArray.push(conditionConfirmPass0)
conditionArray.push(conditionConfirmPass1)
idErrorTagArray.push(idErrorTagPass)
idErrorTagArray.push(idErrorTagConfirmPass)
messageErrorArray.push(messageErrorPass0)
messageErrorArray.push(messageErrorPass1)
messageErrorArray.push(messageErrorConfirmPass0)

/** execute */
view.validateTest(conditionArray,idErrorTagArray,messageErrorArray, defaultMessageError)

// XU LY PASSWORD TOI UU
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

/** execute */
view.validateTest(conditionArray,idErrorTagArray,messageErrorArray, defaultMessageError)

view.validateTest = function(conditionArray, idErrorTagArray, messageErrorArray, defaultMessageError) {
    if (conditionArray[0]){
        view.setText(idErrorTagArray[0],defaultMessageError)
        if (conditionArray[1]){
            if (conditionArray[2] && conditionArray[3]) {
                view.setText(idErrorTagArray[1], defaultMessageError)
                return true
            } else {
                view.setText(idErrorTagArray[1], messageErrorArray[2])
                return false
            }
        } else {
            view.setText(idErrorTagArray[0], messageErrorArray[0])
            return false
        }
    } else {
        if (conditionArray[2]){
            view.setText(idErrorTagArray[0],messageErrorArray[1])
            view.setText(idErrorTagArray[1],messageErrorArray[2])
            return true
        } else {
            view.setText(idErrorTagArray[0],messageErrorArray[1])
            return false
        }
    }
}

