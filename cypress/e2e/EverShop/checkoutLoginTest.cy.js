import { checkoutPage } from "../../support/POM/CheckoutPage";





//====TC02006 : Checkout - Order dengan Login & Fulfill all Requirements===//    
describe("TC02006 - User melakukan checkout dengan akun sudah Login",()=>{
    beforeEach(()=>{
        // login.visitWebsite()
        cy.fixture('user/loginData').then((users) =>{
                // nama Custom Command 'Login'
                cy.Login(users[1].email, users[1].password, users[1].success);
            
        })
        cy.visit('https://demo.evershop.io/')
    })
   context("Login menggunakan session",()=>{
        it("User melakukan checkout",()=>{
            
            cy.wait(2000)

            //Pilih produk Modern Ceramic Vase - Green
            cy.contains('Modern Ceramic Vase - Green')
            .should("be.visible")
            .click({ force: true });
            cy.wait(2000)

            //Pilih Warna
            cy.get('.variant-option-list')
            .contains('Green', { matchCase: false })
            .should("be.visible")
            .click({ force: true });
            cy.wait(1000);

            //input Quantity
            checkoutPage.inputFieldQTY("10")

            //klik ADD TO CART
            cy.contains('ADD TO CART')
            .should("be.visible")
            .click();
            cy.wait(5000);

            // Tunggu minicart muncul
            cy.xpath("//*[local-name()='svg']");

            //klik x untuk kembali ke home dan pilih barang lain
            cy.get("button[data-slot='sheet-close']")
                .should('be.visible')
                .click()
            cy.get("a[data-slot='breadcrumb-link']")
                .contains('Home')
                .click()

            //Pilih produk Stainless Steel Thermos - Black
            cy.contains('Stainless Steel Thermos - Black')
            .should("be.visible")
            .click({ force: true });
            cy.wait(2000)

            //Pilih Warna
            cy.get('.variant-option-list')
            .contains('Black', { matchCase: false })
            .should("be.visible")
            .click({ force: true });
            cy.wait(1000);

            //Input Qty
            // cy.get('input[name="qty"]')
            // .should("be.visible")
            // .clear()
            // .type("2")
            // .should('have.value', "30");
            // cy.wait(1000);
            checkoutPage.inputFieldQTY("10")

            //klik ADD TO CART
            cy.contains('ADD TO CART')
            .should("be.visible")
            .click();
            cy.wait(5000);

            // Tunggu minicart muncul
            cy.xpath("//*[local-name()='svg']");


            //klik Checkout
           cy.contains('.minicart__viewcart__button','Checkout')
            .click();
            cy.wait(2000)

            //===Isi data diri di halaman checkout===//
            cy.url().should('include','checkout')
            // checkoutPage.inputFieldEmail()
            checkoutPage.inputFieldFullName()
            checkoutPage.inputFieldTelephone()
            checkoutPage.inputFieldAddress()
            checkoutPage.inputFieldCity()
            checkoutPage.inputFieldCountry("United States")
            checkoutPage.inputFieldProvince("Alabama")
            checkoutPage.inputFieldPostCode()

            //Shipping Method
            checkoutPage.selectShippingMethod("Express") // 'Basic' atau ' Express'

            // Billing address
            checkoutPage.selectBillingSameAddress()
            //Payment Method
            checkoutPage.clickButtonPayment()

            //Place Order
            checkoutPage.clickButtonSubmitPayment()

            
        })
        
    })

})