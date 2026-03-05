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

    clickLogin(){
        cy.contains('button','Sign In').click()
    }

    verifyLoginError(){
        cy.contains("Invalid email or password").should("be.visible")
    }
}
export default LoginPage