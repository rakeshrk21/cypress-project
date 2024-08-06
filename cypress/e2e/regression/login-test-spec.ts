
// import { homePage, landingPage, loginPage } from "cypress/pages/page-list";
import { HomePage } from "cypress/pages/home-page";
import { LandingPage } from "cypress/pages/landing-page";
import { LoginPage } from "cypress/pages/login-page";


describe('Verifies login functionality', ()=>{

    const homePage = new HomePage();
    const landingPage = new LandingPage();
    const loginPage = new LoginPage();
    let testData: any;

// https://react-redux.realworld.io/
    before(() => {
        cy.fixture('loginData').then((data) => {
            testData = data;
        });
    });

    after(()=>{
        cy.log('In the After/AfterAll block');
    })

    Cypress.config('defaultCommandTimeout', 6000)

    it('Successful Login attempt', ()=>{
        cy.visit('/');
        landingPage.clickLoginButton();
        cy.userLogin(testData.validEmail, testData.validPassword);
        // loginPage.setUsername(testData.validEmail);
        // loginPage.setPassword(testData.validPassword);
        // loginPage.clickSubmit();
        homePage.checkGlobalFeed();
        homePage.checkGlobalLink();
        homePage.getUserLink();
        homePage.logout();
    });

    it('Unsuccessful Login attempt', ()=>{
        cy.visit('/');
        landingPage.clickLoginButton()
        loginPage.setUsername(testData.invalidEmail);
        loginPage.setPassword(testData.invalidPassword);
        loginPage.clickSubmit();
        loginPage.validateLoginError1();
    });
});