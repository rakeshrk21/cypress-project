import { wrap } from "cypress/types/lodash";

describe('iframe handling test suite', ()=>{

    before(()=> {
        console.log('runs before all tests!')
    })

    it('handle iframe', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.type("my text")

        //iframe.clear().type('Welcome Rakesh!')
    });

    it('handle iframe second approach with iframe library', ()=>{
        let iframe = cy.visit('https://the-internet.herokuapp.com/iframe')   
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').should('exist');
        
        //.should('contain', 'Your content goes here.')
    });

});