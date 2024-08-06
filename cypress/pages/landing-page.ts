import { BasePage } from "./base-page";

export class LandingPage extends BasePage {
    private readonly loginButton: string = 'a[href="#login"]';

    clickLoginButton() : void {
        cy.get(this.loginButton).click();
    }
}