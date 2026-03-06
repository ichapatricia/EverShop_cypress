class HomePage{

    visitHome(){
        cy.visit("https://demo.evershop.io/")
    }
    // clickShop(){

    // }
    clickAbout(){
        cy.contains("About us").click()
        cy.url().should('include','/about-us')
    }
    // clickSearch(){
    //    cy.get('.search-box a, a.search-icon').should('be.visible').click()
    // }
    clickProfil(){
        cy.get('.header-user-icon, .user-icon, a[href*="login"]').first().click()
        cy.url().should("include","/account/login")
    }
    clickCart(){
        cy.get('.mini-cart-icon').should('be.visible').click()
    }
    verifyBanner(){
        cy.contains('div.relative > div.relative > div.absolute').should('be.visible')
    }
    clickShopNow(){
        cy.contains('Shop Now').click({force: true})
    }
    clickViewCollection(){
        cy.contains('View Collection').click({force:true})
    }

    clickShopKids(){
        cy.contains('Shop kids').click()
        cy.url().should('include','/kids')
    }
    clickShopWomen(){
        cy.contains('Shop women').click()
        cy.url().should('include','/women')
    }
    clickShopMen(){
        cy.contains('Shop men').click()
        cy.url().should('include','/men')
    }
    clickProductName(){
        cy.contains('Ceramic Coffee Cup - Yellow').click()
        cy.url().should('include','/accessories/ceramic-coffee-cup-yellow')

    }
    // clickPrice(){

    // }

    clickCreateAccount(){
        cy.contains('Create an account').click()
    }

    clickLogin(){
        cy.get('.header-user-icon, .user-icon, a[href*="/login"]').first().click({force: true})
    }

    selectProduct(){
        cy.get('a[href*="/products/"]', { timeout: 10000 }).first().should('be.visible').click({force: true})
    }
    openCart(){
        cy.get('[data-testid="cart-icon"]').click()
    }
}
export default HomePage