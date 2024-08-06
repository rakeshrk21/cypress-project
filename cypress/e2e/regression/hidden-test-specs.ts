describe('hidden element test', ()=> {

    beforeEach('setup', ()=> {
        cy.visit('https://www.amazon.com/');
    })

    it('amazon hidden element', () => {
        cy.get('#nav-link-accountList-nav-line-1').should('be.visible');
        cy.get('#nav-link-accountList-nav-line-1').should('satisfy', Cypress.dom.isVisible);
        cy.get('#nav-link-accountList-nav-line-1').should('contain.text', 'Hello, sign in');
        cy.get('#nav-link-accountList-nav-line-1').invoke('show');
        cy.contains('Account').should('be.visible');
        cy.contains('Orders').should('be.visible');
        cy.contains('Sign in').click({force: true});
    });

})