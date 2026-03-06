// import HomePage from "../../support/POM/HomePage"
// import LoginPage from "../../support/POM/LoginPage"
// import ProductPage from "../../support/POM/ProductPage"
// import CartPage from "../../support/POM/CartPage"
// import CheckoutPage from "../../support/POM/CheckoutPage"

// const home = new HomePage()
// const login = new LoginPage()
// const product = new ProductPage()
// const cart = new CartPage()
// const checkout = new CheckoutPage()

// let valLogin 
// let checkOut 


// describe("Login with Session",()=>{
//     before(()=>{
//         cy.fixture('user/loginData').then((data) =>{
//             valLogin = data
//         })
//         cy.fixture('user/checkoutData').then((data)=>{
//             checkOut = data
//         })
//     })
// //====TC02006 : Checkout - Order dengan Login & Fulfill all Requirements===//    
//     it("TC02006 - Succesful Login checkout",()=>{
//         home.visitHome()
//         home.clickLogin()
        
//         // Tunggu sebentar sampai form login muncul
//         cy.url().should('include', '/login')
        
//         login.inputEmail(valLogin.validLogin.email)
//         login.inputPassword(valLogin.validLogin.password)
//         login.clickLogin()
        
//         cy.get('.header-user-icon, .user-icon', { timeout: 10000 }).should('be.visible')
//         cy.visit('https://demo.evershop.io/accessories/ceramic-coffee-cup-yellow')
//         cy.contains('Ceramic Coffee Cup', { timeout: 15000 }).should('be.visible')
        
//         product.selectColor('Yellow')
//         product.inputQuantity(2)
//         product.addToCart()
        
//         home.openCart()
        
//         cart.clickCheckout()
        
//         checkout.fillShipping(checkOut.shippingAddress)
//         checkout.selectShipping()
//         checkout.selectBilling()
//         checkout.selectPayment()
//         checkout.applyCoupon(checkOut.coupon)
//         checkout.placeOrder()
        
//         checkout.successOrder()
        
        
//     })

// })