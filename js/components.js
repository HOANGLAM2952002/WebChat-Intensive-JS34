const components = {}

components.register = 
`<section class = register-container> 
<form id="register-form" class = "register-form">
<div class = "form-header">
    <h3 id="form-header-h3">MindX Chat</h3>
</div>
<div class = "form-content">
    <div class = "name-wrapper">
        <div class = "input-wrapper">
            <input type="text" name = "firstName" placeholder="First name"> 
            <div id="firstname-error" class="message-error"></div>
        </div>
        <div class= "input-wrapper">
            <input type="text" name = "lastName" placeholder="Last name"> 
            <div id="lastname-error" class="message-error"></div>
        </div>
    </div>
    <div class="email-wrapper">
        <div class = "input-wrapper">
            <input type="email" name = "email" placeholder = "Email">
            <div id="email-error" class="message-error"></div>
        </div>
    </div>
    <div class = "password">
        <div class = "input-wrapper">
            <input type="password" name = "password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
        <div class= "input-wrapper">
            <input type="password" name = "confirmPassword" placeholder="Confirm Password">
            <div id="confirmPassword-error" class="message-error"></div>
        </div>
        <div id="register-error" class="message-error"></div>
        <div id="register-succeed" class="message-succeed"></div>
    </div>
</div>
<div class = "form-footer">
    <a id="register-link" href="#"> Already have an account? Login</a>
    <button id="register-submit-btn" type = "submit">Register</button>
</div>
</form>
</section>`

components.login = 
`<section class="login-container">
<form id="login-form" class="login-form">
    <div class= "form-header">
        <h3 id= "form-header-h3">MindX Chat</h3>
    </div>
    <div class= "form-content">
        <div class= "email-wrapper">
            <div class= "input-wrapper">
                <input type="email" name="email" placeholder="Email">
                <div id="email-error" class="message-error"></div>
            </div>
        </div>

        <div class= "password-wrapper">
            <div class= "input-wrapper">
                <input type="password" name="password" placeholder="Password">
                <div id="password-error" class="message-error"></div>
            </div>
        </div>
        <div id="login-error" class="message-error"></div>
    </div>

    <div class= "form-footer">
        <a id="login-link" href="#"> Not yet have an account? Register</a>
        <button id="login-submit-btn" type="submit">Login</button>
    </div>
</form>
</section>`

components.chat = `
<section class="chat-container">
    <div class="aside-left">
        <div id="list-conversations" class="list-conversations"></div>
        <form id="form-add-conversation" class="form-add-conversation">
            <div class="input-wrapper">
                <input id="form-add-conversation-title-input" type="text" name="title" placeholder="Conversation title">
                <div id="title-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
                <input id="form-add-conversation-friend-email-input" type="email" name="friendEmail" placeholder="Your friend email">
                <div id="friend-email-error" class="message-error"></div>
            </div>
            <button id="form-add-conversation-submit-btn" class="btn-icon" type="submit">
                <i class="fas fa-plus"></i>
            </button>
        </form>
    </div>
    <div class="current-conversation">
        <div id="list-messages" class="list-messages">
        </div>
        <form id="form-chat" class="form-chat">
            <div class="input-wrapper">
                <input id="form-chat-input" type="text" name="message" placeholder="Enter your message">
            </div>
            <button id="form-chat-submit-btn" type="submit">Send</button>
        </form>
    </div>
    <!-- right -->
</section>`

components.nav = `
<nav class="main-nav">
    <div class="user-profile">
        <div id="user-email" class="user-email">
        </div>
            <button class="btn-icon" id="sign-out-btn">
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
</nav>`

components.loading = `
<div class="loading-container">
    <img src= "https://i.pinimg.com/originals/12/6c/a6/126ca6bcc2616e4edf09f466e9925396.gif" alt="Loading"/>
</div>
`
