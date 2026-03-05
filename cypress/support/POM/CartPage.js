class CartPage{
    clickCheckout(){
        cy.contains('Checkout').click()
    }
}
export default CartPage