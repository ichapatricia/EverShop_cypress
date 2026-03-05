class FilterFeature{
    //reuseable untuk semua warna
    selectColor(colorName){
        cy.contains('label',colorName).parent().find('input[type="checkbox"]').check({force: true})
        cy.wait(1500)
    }
    setPriceRange(maxPrice){
        //geser slider
        cy.get('input[type="range"]').last().invoke("val",maxPrice).trigger("change",{force:true})
        cy.wait(1500)
    }
    // applySort(option){
    //     // Di EverShop, sort by: 'price' atau 'name'
     
    //     cy.get('body').then(($body) => {
    //         if ($body.find('select').length > 0) {
    //             // Jika ada tag select, pilih berdasarkan teks atau value (case-insensitive)
    //             cy.get('select').first().select(option.toLowerCase(), { force: true });
    //         } else {
    //             // Jika benar-benar tidak ada select, klik manual dropdown-nya
    //             cy.get('[class*="sort"], .product-sorting').first().click({ force: true });
    //             cy.wait(1000);
    //             // Cari teks yang mengandung kata kunci (misal 'Price') tanpa peduli besar kecil huruf
    //             cy.contains(new RegExp(option, "i")).click({ force: true });
    //         }
    //     });

    //     cy.wait(3000);
    // }
}
export default FilterFeature