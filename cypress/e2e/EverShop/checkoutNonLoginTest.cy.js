import { checkoutPage } from "../../support/POM/CheckoutPage";
import Login from "../../support/POM/Login"

const login = new Login()

describe("TC03 - User melakukan checkout tanpa Login ",()=>{
    beforeEach(()=>{
        checkoutPage.visitWebsite();
    })

    context("TC03001 - User melakukan checkout tanpa Login",()=>{
        it("User melakukan checkout",()=>{
            
            cy.wait(2000)

            //Pilih produk Stainless Steel Thermos - Yellow
            cy.contains('Stainless Steel Thermos - Yellow')
            .should("be.visible")
            .click({ force: true });
            cy.wait(2000)

            //Pilih Warna
            cy.get('.variant-option-list')
            .contains('White', { matchCase: false })
            .should("be.visible")
            .click({ force: true });
            cy.wait(1000);

            //Input Qty
            cy.get('input[name="qty"]')
            .should("be.visible")
            .clear()
            .type("2")
            .should('have.value', "2");
            cy.wait(1000);

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
            checkoutPage.inputFieldEmail()
            checkoutPage.inputFieldFullName()
            checkoutPage.inputFieldTelephone()
            checkoutPage.inputFieldAddress()
            checkoutPage.inputFieldCity()
            checkoutPage.inputFieldCountry("United States")
            checkoutPage.inputFieldProvince("Alabama")
            checkoutPage.inputFieldPostCode()

            //Shipping Method
            checkoutPage.selectShippingMethod() // 'Basic' atau ' Express'
            //test webhook

            // Billing address
            checkoutPage.selectBillingSameAddress()
            //Payment Method
            checkoutPage.clickButtonPayment()

            //Place Order
            checkoutPage.clickButtonSubmitPayment()

            
        })
        
    })
})
