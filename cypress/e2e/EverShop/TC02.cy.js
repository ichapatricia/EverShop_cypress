import HomePage from "../../support/POM/HomePage"
import RegisterPage from "../../support/POM/RegisterPage"
import Login from "../../support/POM/Login"


const register = new RegisterPage()
const home = new HomePage()
const login = new Login()

let logindata
let duplRegis

describe("Checkout dengan Login",()=>{

     before(()=>{
        cy.fixture('user/loginData').then((data) =>{
            logindata = data
        })
        cy.fixture('user/registerData').then((data)=>{
            duplRegis = data
        })
    })

    context("Register Test",()=>{
        beforeEach(()=>{
            home.visitHome()
            home.clickProfil()
            home.clickCreateAccount()
        })
//====TC02001 : Register - Tanpa Last Name atau Email yang sama===//
        it("TC02001 - Register Duplicate",()=>{
            register.inputFullName(duplRegis.duplicateEmail.fullname)
            register.inputEmail(duplRegis.duplicateEmail.email)
            register.inputPassword(duplRegis.duplicateEmail.password)
            // register.togglePassword()
            register.submitRegister()
            register.errorEmailUsed()
        })
//====TC02002 : Register - Password kurang dari 6 karakter===//
        it("TC02002 - Password less than 6",()=>{
            register.inputFullName(duplRegis.shortPassword.fullname)
            register.inputEmail(duplRegis.shortPassword.email)
            register.inputPassword(duplRegis.shortPassword.password)
            // register.togglePassword()
            register.submitRegister()
            register.verifyPasswordMin()
        })
    })

    context("Login Test",()=>{
        beforeEach(()=>{
            home.visitHome()
            home.clickProfil()
        })
//====TC02003 : Login- Email dan Password valid ===//
        it('TC02003 - Login valid',()=>{
            login.fillInputEmail(logindata[1].email)
            login.fillInputPassword(logindata[1].password)
            login.clickLogin()
            cy.url().should('include','https://demo.evershop.io/')
        })
//====TC02004 :Login -  Email atau Password Invalid dan kedua field kosong ===//
        it('TC02004 - Login invalid & empty field',()=>{
            login.fillInputEmail(logindata[0].email)
            login.fillInputPassword(logindata[0].password)
            login.clickLogin()
            login.verifyLoginError()
            login.clearEmailField()
            login.clearPasswordField()
            login.clickLogin()
            cy.url().should('include','/login')
            login.errorRequired()
        })
//====TC02004 :Login -  Email atau Password Invalid dan kedua field kosong ===//
        it('TC02005 - Forgot Password',()=>{
            login.forgorPwd()
        })
    })
})
