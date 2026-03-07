import HomePage from "../../support/POM/HomePage"
import Login from "../../support/POM/Login"
import RegisterPage from "../../support/POM/RegisterPage"
import FilterFeature from "../../support/POM/FilterFeature"


const loginPage = new Login()
const registerPage = new RegisterPage()
const homePage = new HomePage()
const filter = new FilterFeature()

let invLogin
let valRegis

describe("UI Component, Register, Filter",()=>{


    before(()=>{
        cy.fixture('user/loginData').then((data) =>{
            invLogin = data
        })
        cy.fixture('user/registerData').then((data)=>{
            valRegis = data
        })
    })
//====TC01001 : Unregistered user try to Login===//
    it("TC01001-Unregistered user try to Login",()=>{
        loginPage.visitWebsite()
        loginPage.fillInputEmail(invLogin[0].email)
        loginPage.fillInputPassword(invLogin[0].password)
        loginPage.clickLogin()
        loginPage.verifyLoginError()
    })
//====TC01002 : Check Form Register===//
    it("TC01002 - Check required field validation",()=>{
        registerPage.visit()
        registerPage.clickSignup()
        registerPage.verifyRequiredEror()
        registerPage.inputPassword("123")
        registerPage.clickSignup()
        registerPage.verifyPasswordMin()

    })
//====TC01003 : User Register dengan data valid===//
    it("TC01003 - User Register menggunakan valid email dan Password",()=>{
        registerPage.visit()
        registerPage.inputFullName(valRegis.validRegist.fullname)
        registerPage.inputEmail(valRegis.validRegist.email)
        registerPage.inputPassword(valRegis.validRegist.password)
        registerPage.clickSignup()
        cy.url().should("include","https://demo.evershop.io/")

    })
//====TC01004 & TC01005 : Cek Komponen UI di Beranda===//
    it("TC01004 - Check Menu pada navbar di Beranda",()=>{
        homePage.visitHome()
        homePage.clickAbout()
        // homePage.visitHome()
        // homePage.clickSearch()
        // cy.get("input[placeholder='Search']").should("be.visible")
        homePage.visitHome()
        homePage.clickProfil()
        homePage.clickCart()
        cy.contains("Your cart is empty").should("be.visible")
        homePage.visitHome()
        homePage.clickShopNow()
        homePage.visitHome()
        homePage.clickViewCollection()
        homePage.visitHome()
    })
//====TC01006 : Cek Komponen UI di Beranda===//
    it("TC01005 - Check Product List & Desc",()=>{
        homePage.visitHome()
        homePage.clickShopKids()
        homePage.visitHome()
        homePage.clickShopWomen()
        homePage.visitHome()
        homePage.clickShopMen()
        homePage.visitHome()
        homePage.clickProductName() // Stainless Steel - Yellow
        homePage.visitHome()
    })

//====TC01007 , TC01008 , TC01010: Check Filter Warna , Price , Kombinasi Price & Color di Accesories===//
    context(" TC01006 & TC01007",()=>{
        beforeEach(()=>{
            homePage.visitHome()
            homePage.clickShopNow()
        })
        context("Single Filter Skenario",()=>{
            it('TC01006 - Check Filter Harga di Accessories',()=>{
                filter.setPriceRange(20) // max di $20
                cy.get('.product-name, .grid img').should("be.visible")
            })
            
            it('TC01007 - Check Filter Warna di Accessories',()=>{
                filter.selectColor("Yellow") // max di $20
                cy.contains('Yellow').should("be.visible")
            })
        })
        context("Kombinasi Filter Skenario",()=>{
            it("TC01008 - Kombinasi Filter Harga dan Warna",()=>{
                filter.setPriceRange(15)
                filter.selectColor('Black')
                //Assertion product exist
                cy.get('img')
            .should("have.attr", "src")
            .and("include", "thermos-black") // Sesuai nama product 'cup-black'
        
                // Tambahkan cek teks nama produk untuk lebih yakin
                cy.contains('Ceramic Coffee Cup').should('be.visible')
            })
        })

//====TC01009: Check Filter Sort By di Accesories===//
        // context.only(" TC01009 - Sorting Filter Skenario",()=>{
        //     it("Sort by Price",()=>{
        //         // Sort By: Default, Price, Name
        //         filter.applySort("Price")
        //         cy.get('.product-price')
        //         .then(($prices)=>{
        //             const prices = [...$prices].map(el=>
        //                 Number(el.innerText.replace('$',''))
        //             )
        //             const sorted = [...prices].sort((a,b)=>a-b)
        //             expect(prices).to.deep.equal(sorted)
        //         })
        //     })
        //     it('Sort by Name',()=>{
        //         filter.applySort("Name")

        //         cy.get('.product-name')
        //             .then(($names) => {
        //             const names = [...$names].map(el => el.innerText.trim())
        //             const sorted = [...names].sort()
        //             expect(names).to.deep.equal(sorted)

        //         })
        //     })
        //     it('Sort by Default',()=>{
        //         filter.applySort("Default")

        //         cy.get('.product-name')
        //             .first()
        //             .should('contain','Stainless Steel Thermos')
        //     })
        // })

    })
})