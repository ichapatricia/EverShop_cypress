class RegisterPage{
    
    visit(){
        cy.visit('https://demo.evershop.io/account/register')
    }

    inputFullName(name){
        cy.get('input#field-full_name').clear().type(name)
    }

    inputEmail(email){
        cy.get('input#field-email').clear().type(email)
    }

    inputPassword(password){
        cy.get('input#field-password').clear().type(password)
    }
    clickSignup(){
            cy.contains('button','Sign Up').click()
    }

    verifyRequiredEror(){
        cy.contains("Full Name is required").should("be.visible")
        cy.contains("Email is required").should("be.visible")
        cy.contains("Password is required").should("be.visible")
    }

    verifyPasswordMin(){
        cy.contains("Password must be at least 6 characters long").should("be.visible")
    }

    // togglePassword(){
    //     cy.get('.password-toggle').click()
    // }
    submitRegister(){
        cy.contains('Sign Up').click()
    }
    errorEmailUsed(){
        cy.contains('Email is already used').should('be.visible')
    }
}
export default RegisterPage