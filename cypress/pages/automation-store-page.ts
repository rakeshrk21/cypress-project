import { BasePage } from "./base-page";

export class AutomationTestStore extends BasePage {
    private readonly welcomeLabel = '.welcome_msg';


    verifyWelcomeLabel() {
        cy.get(this.welcomeLabel)
        .should('be.visible')
        .invoke('text')
        .should('includes', 'Welcome to the Automation Test Store! ');
    }

    verifyWelecomeText() {
        cy.get(this.welcomeLabel).should('be.visible').then(($text) => {
            expect($text).contain('Welcome to the Automation Test Store! ');
        })
    }
}