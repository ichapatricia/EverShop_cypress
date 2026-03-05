class LoginPage{
    
    visit(){
        cy.visit("https://demo.evershop.io/account/login")
    }

    inputEmail(email){
        cy.get('input#field-email').clear().type(email)
    }

    inputPassword(password){
        cy.get('input#field-password').clear().type(password)
    }
    clearEmailField() {
        cy.get('input#field-email').clear()
    }

    clearPasswordField() {
        cy.get('input#field-password').clear()
    }

    clickLogin(){
        cy.contains('button','Sign In').click()
    }
    // clickSignIn(){
    //     cy.contains('Sign In').click()
    // }
    verifyLoginError(){
        cy.contains("Invalid email or password").should("be.visible")
    }
    errorRequired(){
        cy.contains('Email is required').should('be.visible')
        cy.contains('Password is required').should('be.visible')
    }
}
export default LoginPage