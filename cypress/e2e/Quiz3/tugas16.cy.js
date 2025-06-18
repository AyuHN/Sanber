import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json" 

    describe('Fungsionalitas - Login', () => {
        beforeEach(() => {
            loginPage.visit();
        })
    
    it('TC1 - Positive - Check login page', () =>  {
        loginPage.verifyBaseUrl();
        loginPage.verifycontainercredential();
        loginPage.verifyUsernameInputKosong("");
        loginPage.verifyPasswordInputKosong("");
        loginPage.verifyButtonEnable();
        loginPage.TextlinkForgotpassword();
    });

    it('TC2 - Negative - Click button Login without input User Name & Password', () => {
        loginPage.verifyBaseUrl();
        loginPage.verifyUsernameInputKosong("");
        loginPage.verifyPasswordInputKosong("");
        loginPage.verifyButtonEnable();
        loginPage.loginbtn();
        loginPage.verifyEmptyCredential();
    
    });

    it('TC 3 -Positive - Login with valid username & password ', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
    });

    it('TC 4 - Negative - Login with invalid username & password', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.invalidUsername);
        loginPage.inputPassword(loginData.invalidPassword);
        loginPage.loginbtn();
        loginPage.verifyInvalidCredential();
    });

    it('TC 5 - Positive - Click textlink forgot your password', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.invalidUsername);
        loginPage.inputPassword(loginData.invalidPassword);
        loginPage.loginbtn();
        loginPage.verifyInvalidCredential();
        loginPage.goToForgotPassword();
    });
});