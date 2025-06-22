import loginPage from "../../support/pageObjects/loginPage"
import directory from "../../support/pageObjects/directory"
import loginData from "../../fixtures/loginData.json" 


describe ('Fungsionalitas - Directory', () => {
    beforeEach(() => {
        loginPage.visit();
    })

    it('TC 1 -Positive - Click Menu Directory ', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
        directory.Directorymenu();

    });

    it('TC 2 -Positive - Check Directory Page ', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
        directory.Directorymenu();
        directory.verifydirectorypage();
    });

    it('TC 3 -Positive - Close&Open dropdown section Directory ', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
        directory.Directorymenu();
        directory.ClosedfilterdropdownDirectory();
        directory.OpenfilterdropdownDirectory();
    });

     it('TC 4 -Positive - Check component on section Dropdown Directory ', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
        directory.Directorymenu();
        directory.Verifykomponenfilter();
        
    })

    it('TC5 - Negative - Cant Filter when Employe Name NULL', () =>  {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
        directory.Directorymenu();
        directory.Verifykomponenfilter();
        directory.VerifyemploynameNull();
        directory.Choosefilterlist();

    })

    it.only('TC6 - Positive - Success Filter', () => {
        loginPage.verifyBaseUrl();
        loginPage.inputUsername(loginData.validUsername);
        loginPage.inputPassword(loginData.validPassword);
        loginPage.loginbtn();
        loginPage.verifyLoginSuccess();
        directory.Directorymenu();
        directory.Verifykomponenfilter();
        directory.Verifiyemployeenamefilled();
        directory.Choosefilterlist();

    })

    

    


     // it.only('TC 2 -Positive - Click Menu Directory ', () => {
    //     loginPage.verifyBaseUrl();
    //     loginPage.inputUsername(loginData.validUsername);
    //     loginPage.inputPassword(loginData.validPassword);
    //     loginPage.loginbtn();
    //     loginPage.verifyLoginSuccess();
    //     directory.Directorymenu();
    //     directory.verifydirectorypage()
    //     directory.textlinkfooter();
    // });









})