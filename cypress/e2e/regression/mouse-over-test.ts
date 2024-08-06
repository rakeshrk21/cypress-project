describe('mouse over test suite', ()=>{

    it('mouse over test', async() => {
        cy.visit('https://demo.opencart.com/');
        cy.contains('MAC (1)').should('not.be.visible');
        cy.get('.nav > li:nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.contains('MAC (1)').should('be.visible').click();
    });

    it('right click', async() => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        cy.contains('right click me').should('be.visible').trigger('contextmenu');
        cy.contains('copy').should('be.visible');
    });

    it('double click', async()=>{})
});
