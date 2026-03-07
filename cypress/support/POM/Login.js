class Login{
    inputEmail = "input[name='email']"
    inputPassword = "input[name='password']"
    buttonLogin = "button"
    buttonAccount = "[href='https://demo.evershop.io/account']"
    buttonKeluar = "[class='text-interactive']"
    buttonSignIn = "[href='https://demo.evershop.io/account/login']"

    seeError(text){
        cy.get(".text-critical, [class*='text-critical']").should("contain.text", text).should("be.visible");
    }

    visitWebsite(){
        cy.visit('https://demo.evershop.io/account/login')
    }

    fillInputEmail(email){
        cy.get(this.inputEmail)
            .should("have.attr", "placeholder", "Email")
            .clear()
            .should("be.visible")
            .type(email);
    }
    
    fillInputPassword(password){
        cy.get(this.inputPassword)
            .should("have.attr", "placeholder", "Password")
            .clear()
            .should("be.visible")
            .type(password);
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
    forgorPwd(){
        cy.contains('a', 'Forgot your password?')
            .should('be.visible')
            .click()

        cy.url().should('include','reset-password')

        cy.contains('button','Reset Password').click()
        cy.contains('Email is required').should('be.visible')

        // Isi email
        cy.get('input[type="email"]')
            .type('user@gmail.com')

        cy.contains('button','Reset Password')
            .click()
        
    }


}
export default Login