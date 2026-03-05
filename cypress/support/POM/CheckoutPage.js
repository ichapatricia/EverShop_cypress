class CheckoutPage{
    fillShipping(data){

        cy.get('input[name="address"]').type(data.address)
        cy.get('input[name="city"]').type(data.city)
        cy.get('input[name="postcode"]').type(data.postcode)
        cy.get('input[name="phone"]').type(data.phone)
    }

    selectShipping(){
        cy.contains('Basic').click() //Basic aja
    }
    selectBilling(){
        cy.get('#billingSameAsShipping').check()
    }
    selectPayment(){
        cy.contains('Cash on Delivery').click()
    }
    applyCoupon(code){
        cy.get('input[name="coupon"]').type(code)
        cy.contains('Apply').click()
    }
    placeOrder(){
        cy.contains('Place Order').click()
    }
    successOrder(){
        cy.contains('Thank you').should('be.visible')
    }
}
export default CheckoutPage