import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json" 

    describe('Fungsionalitas - Login', () => {
        beforeEach(() => {
            loginPage.visit();
        })
    //Hanya validasi elemen statis UI
    it('TC1 - Positive - Check login page', () =>  {
        loginPage.verifyBaseUrl();
        loginPage.verifycontainercredential();
        loginPage.verifyUsernameInputKosong("");
        loginPage.verifyPasswordInputKosong("");
        loginPage.verifyButtonEnable();
        loginPage.TextlinkForgotpassword();
    });


    //Tidak ada API request yang dikirim
    it('TC2 - Negative - Click button Login without input User Name & Password', () => {
        loginPage.verifyBaseUrl();
        loginPage.verifyUsernameInputKosong("");
        loginPage.verifyPasswordInputKosong("");
        loginPage.verifyButtonEnable();
        loginPage.loginbtn();
        loginPage.verifyEmptyCredential();
    
    });

    //yes, pakai intercept
    it('TC3 - Positive - Login with valid username & password', () => {
        loginPage.verifyBaseUrl();
        // Optional intercept kalau ingin pastikan dashboard API loaded
        cy.intercept('GET', '/web/index.php/api/v2/dashboard/employees/action-summary').as('getDashboardData');
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        cy.wait('@getDashboardData'); // kalau pakai intercept
        loginPage.verifyLoginSuccess();
    });

    //Tidak ada XHR yang bisa di-intercept (error muncul di UI)
    it('TC 4 - Negative - Login with invalid username & password', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.invalidUsername);
        loginPage.inputPassword(loginData.invalidPassword);
        loginPage.loginbtn();
        loginPage.verifyInvalidCredential();
    });

    //Hanya pindah halaman, tanpa request penting (tidak load data API)
    it('TC 5 - Positive - Click textlink forgot your password', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.invalidUsername);
        loginPage.inputPassword(loginData.invalidPassword);
        loginPage.loginbtn();
        loginPage.verifyInvalidCredential();
        loginPage.goToForgotPassword();
    });
});