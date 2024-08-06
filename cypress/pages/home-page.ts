import { BasePage } from "./base-page";

export class HomePage extends BasePage {

    private readonly settingsButton = 'a[href="#settings"]';
    private readonly logoutButton = '.btn.btn-outline-danger';
    private readonly globalLink = '.nav-link.active'; // *//a[text()='Global Feed']
    private readonly userLink ='a[href="#@tm.rakeshr@gmail.com"]';
    
    // validate that login was successful by checking global link is present
    verifyLoginWasSuccessful() {
        cy.get(this.globalLink).should('exist').and('be.visible');
        cy.contains('Global Feed').should('exist').and('be.visible')
        .invoke('text').then((text)=>{
            expect(text).to.contain('Global');
        });
        this.getElementText('tm.rakeshr@gmail.com', true)
        .then((text) => {
            cy.log(`email text is ${text}`);
            cy.log('email text is: ', text);
            expect(text).to.equal('tm.rakeshr@gmail.com');
        });
    }

    logout() : void {
        // cy.get(this.settingsButton).click();
        this.clickElement(this.settingsButton);
        // cy.contains()
        // cy.get(this.logoutButton).click();
        this.clickElement(this.logoutButton);
    }

    checkGlobalLink(){
        cy.get(this.globalLink, {timeout: 1000}).should('exist').and('be.visible')
    }

    checkGlobalFeed(){
        cy.contains("Global Feed").should('exist').and('be.visible')
    }

    getUserLink(){
        cy.get(this.userLink)
        .should('exist').and('be.visible')
        .invoke('text').then((text)=>{
            expect(text).to.contain('tm.rakeshr@gmail.com')
        })
    }


}