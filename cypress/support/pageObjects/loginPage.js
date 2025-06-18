// support/pageObjects/loginPage.js

class Login {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    verifyBaseUrl() {
        cy.url().should('include', 'orangehrmlive.com');
        cy.title().should('include', 'OrangeHRM');
    }

    verifycontainercredential() {
        //pastikan untuk container credential tampil di halaman login
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials')
            .should('be.visible')
            .and('contain.text','Username : Admin')
            .and('contain.text','Password : admin123');
    }

    verifyUsernameInputKosong () {
        //pastikan username input kosong
        cy.xpath("//input[@placeholder='Username']")
            .should('exist')
            .and('be.visible')
            .and('have.value', '');
    }

    verifyPasswordInputKosong () {
        //pastikan password input kosong
         cy.get("input[placeholder='Password']")
            .should('exist')
            .and('be.visible')
            .and('have.value', '');
    }

    verifyButtonEnable() {
        //memastikan bahwa button enable
        cy.get("button[type='submit']")
            .should('be.enabled')
            .and('be.visible')
            .and('contain.text', 'Login');
    }

    loginbtn() {
        //memastikan button login bisa diclick 
        cy.get("button[type='submit']")
        .click();
    }

    TextlinkForgotpassword() {
        //memastikan textlink forgot password dapat dilihat dan aktif 
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')
            .should('be.visible')
            .should('contain.text','Forgot your password?');
    }

    inputUsername(username){
        //Memastikan bahwa field Username bisa di input.
        cy.wait(10000);
        cy.get("input[placeholder='Username']")
            .clear()
            .type(username)
            .should('have.value', username);
    }

    inputPassword(password) {
        //Memastikan bahwa field Password bisa diclick.
        cy.get("input[placeholder='Password']")
            .clear()
            .type(password)
            .should('have.value', password);
    }

    verifyLoginSuccess() {
        //Memastikan bahwa telah berhasil login dan url nya sudah tepat berada di /dashboard/index. 
        cy.url().should('include', '/dashboard/index');
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('contain','Dashboard');
    }

    verifyInvalidCredential() {
        //untuk melakukan verifikasi error message yang muncul ketika credential yang di input inbvalid 
        cy.wait(10000);
        cy.get("div[role='alert']")
            .should('be.visible')
            .and('contain.text','Invalid credentials');
    }

    verifyEmptyCredential() {
        //untuk melakukan verifikasi bahwa alert akan muncul ketika username & password tidak di isi ketika click button login.
        cy.xpath("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]")
            .should('be.visible')
            .and('contain.text', 'Required');
    }

    goToForgotPassword() {
        //Untuk memastikan textlink forgot password bisa diclick, dan diarahkan ke forgot password page. 
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header")
            .click();
        cy.wait(10000);
        cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title")
            .should('be.visible');
        cy.get("input[placeholder='Username']")
            .should('be.visible')
            .and('have.value', '');
        cy.url().should('include','/requestPasswordResetCode');
        cy.xpath("//button[normalize-space()='Cancel']")
            .should('be.visible')
            .and('be.enabled')
            .and('contain.text','Cancel');
        cy.xpath("//button[normalize-space()='Reset Password']")
            .should('be.visible')
            .and('be.enabled')
            .and('contain.text','Reset Password');
    }
}

export default new Login();
