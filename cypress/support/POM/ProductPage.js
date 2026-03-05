class ProductPage{
    
    selectColor(){
        cy.get('.variant-option').first().click()
    }
    inputQuantity(qty){
        cy.get('input[name="qty"]').clear().type(qty)
    }
    errorColor(){
        cy.contains('Please select variant options').should('be.visible')
    }
}
export default ProductPage