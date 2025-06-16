describe ('TC 1 (Positive) -> Check login page', () => {
    it('should be succes show login page correctly', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.get(".orangehrm-login-logo") //.should('be.visible'); 
        cy.get(".oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials")
            .should('be.visible').and('contain.text','Username : Admin').and('contain.text','Password : admin123');
        cy.wait(10000);
        cy.xpath("//input[@placeholder='Username']").should('exist').and('be.visible').and('have.value', '');
        cy.get("input[placeholder='Password']").should('exist').and('be.visible').and('have.value', '');
        cy.get("button[type='submit']").should('be.enabled').and('be.visible');
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('be.visible');

    })

});

describe ('TC 2 (Negative) -> Click button Login without input User Name & Password', () => {
    it('cant be login when Credential NULL (not inputed yet)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(10000);
        cy.get("input[placeholder='Username']").should('be.visible');
        cy.get("input[placeholder='Password']").should('be.visible');
        cy.get("button[type='submit']").click();
        cy.xpath("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]").should('be.visible').and('contain.text', 'Required');

    })
});


describe ('TC 3 (Positive) -> Login with valid User Name & Password', () => {
    it('Success login when credential is correct', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type ('admin123');
        cy.get("button[type='submit']").click();
        
        cy.url().should('include','/dashboard/index');
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('contain','Dashboard');
        

    })
});


describe ('TC 4 (Negative) -> Login with invalid User Name & Password', () => {
    it('cant be login when credential wrong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //cy.wait(1000);
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type ('Admin123');
        cy.get("button[type='submit']").click();
        cy.get("div[role='alert']").should('be.visible').and('contain.text','Invalid credentials' );

     
    })

});

describe ('TC 5 (Positive) -> Click textlink forgot your password', () => {
    it('Show Forgot Password Page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type ('Admin123');
        cy.get("button[type='submit']").click();
        cy.get("div[role='alert']").should('be.visible').and('contain.text','Invalid credentials' );
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click();
        cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").should('be.visible');

        cy.url().should('include','/requestPasswordResetCode');

     
    })

});

describe ('TC 6 (Positive) -> Check Forgot Pssword Page', () => {
    it('Show Forgot Password Page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type ('Admin123');
        cy.get("button[type='submit']").click();
        cy.get("div[role='alert']").should('be.visible').and('contain.text','Invalid credentials' );
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click();
        cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").should('be.visible');

        cy.url().should('include','/requestPasswordResetCode');
        cy.get("input[placeholder='Username']").should('be.visible').and('have.value', '');
        cy.xpath("//button[normalize-space()='Cancel']").should('be.visible').and('be.enabled').and('contain.text','Cancel');
        cy.xpath("//button[normalize-space()='Reset Password']").should('be.visible').and('be.enabled').and('contain.text','Reset Password');


     
    })

});