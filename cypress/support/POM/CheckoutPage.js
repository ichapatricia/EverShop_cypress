class CheckoutPage{ 
    buttonAkses = "a.button.primary"
    buttonHome = ".logo-icon"
    buttonProduct = ".product-name.product-list-name"
    buttonVarian = ".variant-option-list"
    buttonAddCart = "button.button.primary.outline, button[type='button'].button.primary"
    buttonContinueShop = ".add-cart-popup-continue"
    buttonCartPopUp = ".add-cart-popup-button"
    buttonPlus = "[class='icon icon-plus']"
    buttonMinus = "[class='icon icon-minus']"
   
    inputEmail = "input[name='contact.email']"
    inputFullName = "#field-shippingAddress\\.full_name"
    inputTelephone = "#field-shippingAddress\\.telephone"
    inputAddress = "#field-shippingAddress\\.address_1"
    inputCity = "#field-shippingAddress\\.city"

    dropdownCountry = "#field-shippingAddress\\.country"
    dropdownProvinsi = "#field-shippingAddress\\.province"
    inputPostCode = "#field-shippingAddress\\.postcode"

    radioBillingSame = 'label[for="same-address"]'
    radioPaymentCOD = 'span'

    buttonPlaceOrder = "button:contains('Place Order')"
    
    buttonAddAddress = "[class='text-interactive underline']"
    buttonUser = ".header [href*='/account']"
    buttonFilter = "[class='flex justify-start items-center']"
    buttonRemove = "[class='text-textSubdued underline']"
    
    seeError(text){
        cy.get(".text-critical, [class*='text-critical']").should("contain.text", text).should("be.visible");
    }
    
    constructor() {
        this.inputQTY = 'input[name="qty"]';
    }
    
    visitWebsite(){
        cy.visit('https://demo.evershop.io')
        cy.wait(2000);
    }
    
    clickButtonKids(){
        cy.get(this.buttonAkses)
            .eq(0)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickButtonWomen(){
        cy.get(this.buttonAkses)
            .eq(1)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickButtonMen(index){
        cy.get(this.buttonAkses).contains("Men")
            .eq(index)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickButtonHome(){
        cy.get(this.buttonHome)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }

    clickProduct1(){
        cy.contains('Stainless Steel Thermos - Yellow')
            // .eq(1)
            .should("be.visible")
            .click({force:true});
        cy.wait(2000);
    }

    clickProduct2(){
        cy.contains('Modern Ceramic Vase - Green')
            .eq(0)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }

    clickVarianSize(index){
        cy.get('.variant-option-list')
            .eq(0)
            .should("be.visible")
            .find('li')
            .eq(index)
            .click();
        cy.wait(2000);
    }

    selectColorByText(colorName) {
    // Mencari elemen di dalam list varian yang memiliki teks 'White', 'Black', atau 'Yellow'
    cy.get(this.buttonVarian)
        .find('a')
        .contains(new RegExp(`^${colorName}$`, 'g')) // Mencari tag 'a' di dalam 'li' yang berisi nama warna
        .should("be.visible")
        .click({ force: true });
        cy.wait(2000);
    }

    // clickFieldQTY(){
    //     cy.get(this.inputQTY)
    //         .click();
    //     cy.wait(2000);
    // }

    // inputFieldQTY(){
    //     cy.get(this.inputQTY)
    //         .clear()
    //         .type("2");
    //     cy.wait(2000);
    // }
    inputFieldQTY(jumlah = "8") { // Kita beri default "8" atau bisa diisi dinamis
    cy.get(this.inputQTY)
        .should("be.visible")
        .clear()             // Menghapus angka bawaan (misal angka 1)
        .type(jumlah)        // Mengetikkan angka baru
        .should('have.value', jumlah); // Opsional: Memastikan angka sudah terinput benar
    cy.wait(2000);
    }

    clickAddToCart(){
        cy.get(this.buttonAddCart)
            .contains('ADD TO CART')
            .should("be.visible")
            .click();
        cy.wait(2000);
    }

    clickContinueShopping(){
        cy.get(this.buttonContinueShop)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickCartPopUp(){
        cy.get(this.buttonCartPopUp)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickMinusQTY(){
        cy.get(this.buttonMinus)
            .eq(1)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }

    clickButtonCheckout(){
        cy.get(this.buttonAkses)
            .eq(1)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    inputFieldEmail(){
        cy.get(this.inputEmail)
            .clear()
            .should("be.visible")
            .should("have.attr", "placeholder", "Enter your email")
            .type("user2@gmail.com");
        cy.wait(2000);
    }

    clickButtonContinueShip(){
        cy.get(this.buttonAkses)
            .eq(0)
            .should("be.visible")
            .click();
        cy.wait(5000);
    }
    
    inputFieldFullName(){
        cy.get(this.inputFullName)
            .clear()
            .should("be.visible")
            .should("have.attr", "placeholder", "Full name")
            .type("Juliana");
        cy.wait(2000);
    }
    
    inputFieldTelephone(){
        cy.get(this.inputTelephone)
            .clear()
            .should("be.visible")
            .should("have.attr", "placeholder", "Telephone")
            .type("08265346378674");
        cy.wait(2000);
    }
    
    inputFieldAddress(){
        cy.get(this.inputAddress)
            .clear()
            .should("be.visible")
            .should("have.attr", "placeholder", "Address")
            .type("Jl. Lombok Test No.2");
        cy.wait(2000);
    }
    
    inputFieldCity(){
        cy.get(this.inputCity)
            .clear()
            .should("be.visible")
            .should("have.attr", "placeholder", "City")
            .type("Nanchang");
        cy.wait(2000);
    }
    
    inputFieldCountry(countryName = "United States"){
        cy.get(this.dropdownCountry)
            .should("be.visible")
                // .should("have.attr", "placeholder", "Country")
            .click()
        cy.get('[role="option"], [id*="option"]')
            .contains(countryName)
            .should("be.visible")
            .click();
        cy.wait(1000);
    }
    
    inputFieldProvince(provinceName='Alabama') {
        cy.get(this.dropdownProvinsi)
            .should("be.visible")
            .click(); // Pastikan nama di sini sama dengan yang di dalam kurung atas
        
        cy.get('[role="option"], [id*="option"]')
            .contains(provinceName)
            .should("be.visible")
            .click();
        cy.wait(1000);
    }
    
    inputFieldPostCode(){
        cy.get(this.inputPostCode)
            .clear()
            .should("be.visible")
            .should("have.attr", "placeholder", "Postcode")
            .type("12345");
        cy.wait(2000);
    }

    selectShippingMethod(method = "Basic"){
    cy.contains('label', method)
        .should("be.visible")
        .click({force:true})
    cy.wait(1000)
    }

    selectBillingSameAddress(){
    cy.get(this.radioBillingSame)
        .should("be.visible")
        .click({force:true})
    cy.wait(1000)
    }

    clickButtonPayment(){
        cy.contains('span','Cash On Delivery')
            .should("be.visible")
            .click({force:true})
        cy.wait(1000)
    }

    clickButtonSubmitPayment(){
        cy.get(this.buttonPlaceOrder)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickButtonAddress(index){
        cy.get(this.buttonAddAddress,{ timeout: 10000 })
            .eq(index)
            .should("be.visible")
            .click();
    }
    
    clickButtonUser(){
        cy.get(this.buttonUser)
            .first()
            .should("exist")
            .click({force: true});
        cy.wait(2000);
    }
    
    clickButtonFilter(index){
        cy.get(this.buttonFilter)
            .eq(index)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
    
    clickButtonRemove(index){
        cy.get(this.buttonRemove)
            .eq(index)
            .should("be.visible")
            .click();
        cy.wait(2000);
    }
}
export const checkoutPage = new CheckoutPage();