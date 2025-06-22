// support/pageObjects/directory.js

class Directory {
    visit () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }

    Directorymenu() {
    cy.xpath("//span[normalize-space()='Directory']")
      .first() // ambil elemen pertama aja
      .click()
      .should('be.visible')
      .and('contain.text','Directory');
    }

    // Directorymenu() {
    //     //Memastikan setelah di menu dashboard, menu Directory visible dan bisa di click.
    //     cy.xpath("//span[normalize-space()='Directory']").click()
    //     .should('be.visible')
    //     .and('contain.text','Directory');
    // }

    verifydirectorypage() {
        //verify sudah berhasil direct ke halaman directory, dan URL nya sudah tepat berada di /directory/viewDirectory
        cy.url().should('include', '/directory/viewDirectory')
        cy.xpath("//h6[normalize-space() = 'Directory']")
        .should('contain','Directory')
        cy.xpath("//div[@class='oxd-table-filter']")
        .should('contain','Directory')
        cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']")
        .should('be.visible')
        cy.xpath("//div[@class='oxd-layout-footer']//p[2]")
        .should('be.visible')
        .and('contain.text','© 2005 - 2025 OrangeHRM, Inc. All rights reserved.' );

    }

    ClosedfilterdropdownDirectory() {
        //click dropdown untuk menutup section filer Directory
        cy.xpath("//i[@class='oxd-icon bi-caret-up-fill']")
        .should('be.visible')
        .click();
    }

    OpenfilterdropdownDirectory() {
        //click dropdown untuk membuka section filter Directory
        cy.xpath("//i[@class='oxd-icon bi-caret-down-fill']")
          .should('be.visible')
          .click();
    } 
    
    Verifykomponenfilter() {
        //cek field Employee Name
        cy.get('.oxd-autocomplete-text-input > input')
        .should('be.visible').and('have.value','');
        // 1. Klik dropdown Job Title (urutan ke-1 dari 2 dropdown)
        cy.get(".oxd-select-wrapper").eq(0).click();

        // 2. Ambil dan log isi dropdown Job Title
        cy.get(".oxd-select-dropdown").should('be.visible').then(($options) => {const jobTitles = [...$options].map(el => el.innerText.trim());
        cy.log('Isi dropdown Job Title:', jobTitles);
      });
       // 3. Klik dropdown Location (urutan ke-2)
       cy.get(".oxd-select-wrapper").eq(1).click();
       
       // 4. Ambil dan log isi dropdown Location
       cy.get(".oxd-select-dropdown").should('be.visible').then(($options) => {const locations = [...$options].map(el => el.innerText.trim());
        cy.log('Isi dropdown Location:', locations);
      });
    }

    VerifyemploynameNull() {
    //Field employee Kosong
    cy.get('.oxd-autocomplete-text-input > input') 
      .should('be.visible')
      .and('have.value', '');
    }

    selectJobTitle(jobTitle) {
    cy.get('.oxd-select-wrapper').eq(0).click();
    cy.get('.oxd-select-dropdown')
      .should('be.visible');
    cy.contains('.oxd-select-option', jobTitle).click();

    }
    selectLocation(location) {
    cy.get('.oxd-select-wrapper').eq(1).click();
    cy.get('.oxd-select-dropdown')
      .should('be.visible');
    cy.contains('.oxd-select-option', location).click();
    
    }

    Verifiyemployeenamefilled() {
        //Filed employee terisi
        cy.get('.oxd-autocomplete-text-input > input')
        .should('be.visible')
        .type('Paul');

    }

    Choosefilterlist(){ 
        //Click dropdown job titke
        cy.get('.oxd-select-wrapper').eq(0).click();
        //Choose from list 'Account Assistant"
        cy.get('.oxd-select-dropdown')
        .should('be.visible');
        cy.contains('.oxd-select-option', 'Account Assistant').click();
        //Click dropdown Location
        cy.get('.oxd-select-wrapper').eq(1).click();
        //Choose from list 'Canadian Regional'
        cy.get('.oxd-select-dropdown')
        .should('be.visible');
        cy.contains('.oxd-select-option', 'Canadian Regional HQ').click();
        //Click button search
        cy.contains('button', 'Search').click();
    }

 





}

        
     
    

    




        
    






export default new Directory();




    // textlinkfooter(){
    //     cy.xpath("//a[normalize-space()='OrangeHRM, Inc']")
    //     .should('have.attr', 'href')
    //     .and('include', 'orangehrm.com'); 

    //     cy.xpath("//a[normalize-space()='OrangeHRM, Inc']")
    //     .invoke('removeAttr', 'target')
    //     .click();
    // }
    

        
