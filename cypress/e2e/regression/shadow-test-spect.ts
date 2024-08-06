import { error } from "cypress/types/jquery";
import { Runnable } from "mocha";

describe('handling shadow dom elememnts', ()=> {

    it.skip('test shadow dom elements', async() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom');
        cy.get("shadow-signup-form").shadow().find('[placeholder="Name"]').type("lambdaTest", {force: true});
        cy.get('shadow-signup-form').shadow().find('[name="username"]').type("lambdaTest", {force: true});
        cy.get('shadow-signup-form').shadow().find('[name="email"]').type('lambdaTest', {force: true});
        cy.get('shadow-signup-form').shadow().find('[name="password"]').type('', {force:true});
        cy.get('shadow-signup-form').shadow().find('[name="confirm_password"]').type('', {force:true});
    });

    it('with cypress config includeShadowDom', async() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom');
        cy.get('[placeholder="Name"]').type("lambda", {force:true});
        cy.get('[placeholder="Name"]').invoke('val').should('contain', 'lambda');
        // cy.get('[name="username"]').should('have.length', 1).then(input => {
        //     cy.wrap(input).type("LambdaTest", { force: true });
        // });
        cy.get('[name="email"]').type("LambdaTest@qa.com", { force: true });
        cy.get('[name="password"]').type("LambdaTest123", { force: true });
        cy.get('[name="confirm_password"]').type("LambdaTest123", { force: true });
    });

});