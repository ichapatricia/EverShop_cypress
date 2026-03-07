// import { login } from "../../support/POM/login";
// import { checkoutPage } from "../../support/POM/CheckoutPage";





// //====TC02006 : Checkout - Order dengan Login & Fulfill all Requirements===//    
// describe("TC02006 - User melakukan checkout dengan akun sudah Login",()=>{
//     beforeEach(()=>{
//         // login.visitWebsite()
//         cy.fixture('user/loginData').then((users) =>{
//                 // nama Custom Command 'Login'
//                 cy.Login(users[1].email, users[1].password, users[1].success);
            
//         });
//         // cy.fixture('user/checkoutData').then((data)=>{
//         //     checkOut = data
//         // })
//     })
//     it("User melakukan checkout",()=>{
//         checkoutPage.clickButtonUser();
//         checkoutPage.clickButtonAddress(0);

//         checkoutPage.inputFieldFullName();
//         checkoutPage.inputFieldTelephone();
//         checkoutPage.inputFieldAddress();
//         checkoutPage.inputFieldCity();
//         checkoutPage.inputFieldCountry('US');
//         checkoutPage.inputFieldProvince('AL');
//         checkoutPage.inputFieldPostCode();

//         checkoutPage.clickButtonContinueShip();
//         checkoutPage.clickButtonAddress(1);

//         checkoutPage.clickButtonHome();
//         checkoutPage.clickButtonKids();
//         checkoutPage.clickButtonFilter(2);

//         checkoutPage.clickProduct1();
//         checkoutPage.clickVarianSize(0);
//         checkoutPage.clickVarianColour(0);

//         checkoutPage.clickFieldQTY();
//         checkoutPage.inputFieldQTY("8");
//         checkoutPage.clickAddToCart();

//         checkoutPage.clickContinueShopping();

//         checkoutPage.clickButtonHome();
//         checkoutPage.clickButtonMen(2);
//         checkoutPage.clickButtonFilter(10);

//         checkoutPage.clickProduct2();
//         checkoutPage.clickVarianSize(0);
//         checkoutPage.clickVarianColour(1);

//         checkoutPage.clickFieldQTY();
//         checkoutPage.inputFieldQTY();
//         checkoutPage.clickAddToCart();

//         checkoutPage.clickCartPopUp();
//         checkoutPage.clickMinusQTY();
//         checkoutPage.clickButtonRemove(0);

//         checkoutPage.clickButtonCheckout();

//         checkoutPage.clickButtonAddress(0);
//         checkoutPage.clickButtonShippingMethod();

//         checkoutPage.clickButtonContinueShip();

//         checkoutPage.clickButtonPayment(0);
//         checkoutPage.clickButtonSubmitPayment();

//         checkoutPage.clickButtonContinueShip();
//         checkoutPage.clickButtonUser();
        
        
//     })

// })