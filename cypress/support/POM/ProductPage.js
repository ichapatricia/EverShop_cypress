class ProductPage{
    
    selectColor(colorName){
        cy.contains('ul.variant-option-list li a', colorName)
          .should('be.visible')
          .click()
        cy.contains('ul.variant-option-list li a', colorName)
          .parent()
          .should('have.class', 'selected')
    }
    inputQuantity(qty){
        cy.get('input[name="qty"]').clear().type(qty)
    }
    errorColor(){
        cy.contains('Please select variant options').should('be.visible')
    }
    addToCart(){
        cy.get('button.button.primary').contains('ADD TO CART').click()
        cy.contains('Just added to your cart').should('be.visible')
    }
    errorColor(){
        cy.contains('Please select variant options').should('be.visible')
    }
    errorQuantity(){
        cy.contains('Value must be at least one').should('be.visible')
    }

}
export default ProductPage