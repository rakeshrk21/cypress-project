export class BasePage {

    // click element
    clickElement(locator: string, useContains=false) {
        if(useContains){
            cy.contains(locator).click();
        } else {
            cy.get(locator).click();
        }
    }

    sendText(locator: string, text: string, useContains=false) {
        if(useContains){
            cy.contains(locator).type(text);
        } else {
            cy.get(locator).type(text);
        }
    }

    isElementVisible(locator: string, useContains=false) {
        if(useContains){
            cy.contains(locator).should('be.visible');
        } else {
            cy.get(locator).should('be.visible');
        }
    }

    getElementText(locator: string, useContains=false) : Cypress.Chainable<string>{
        if(useContains){
            return cy.contains(locator)
            .invoke('text')
            .then((text: string) => {
                return text;
            });
        } else {
            return cy.get(locator)
            .invoke('text')
            .then((text: string) => {
                return text;
            })
        }
    }

    waitForElementToBeVisible(locator: string, timeout: number = 10000, useContains=true){
        if(useContains){
            cy.contains(locator, {timeout}).should('be.visible');
        } else {
            cy.get(locator, {timeout}).should('be.visible');
        }
    }
}