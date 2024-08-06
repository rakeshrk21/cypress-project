import 'cypress-iframe'

describe('Test webtables, drop down, alerts, checkbox', () => {
    it('test webtable', () => {
        let col = 3; let row = 3;
        cy.visit('https://the-internet.herokuapp.com/tables');
        // 1 - Check value present anywhere in the table
        cy.get('#table1')
            .contains('td', 'jdoe@hotmail.com')
            .should('be.visible');

        // 2 - Check value based on specific row and column
        cy.get(`#table1>tbody>tr:nth-child(${row})>td:nth-child(${col})`)
            .contains('td', 'jdoe@hotmail.com')
            .should('be.visible');

        // 3 - Check value based on a condition

    });

    it('Simple alert', function () {
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('contain', 'You successfully clicked an alert')

    })

    it('Confirmation alert - Ok button', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })
        cy.get('#result').should('contain', 'You clicked: Ok')
    })

    it('Confirmation alert - Cancel button', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain', 'You clicked: Cancel')
    })

    it('Prompt Alert', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window() // grabs the global window object allowing you to work with it
            .then(($win) => {
                // in this case you are able stub the prompt because you have the windo object
                // you need to stub before you click
                cy.stub($win, 'prompt').returns('Hello Alert')
                // now click the prompt
                cy.contains('Click for JS Prompt').click()
            })
        cy.get('#result').should('contain', 'You entered: Hello Alert')
    })

    it('test different drop down', () => { });

    //https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/ - checkbox
    // https://seleniumbase.io/demo_page - dropdown
    //'https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx'
    // https://demo.mobiscroll.com/select/multiple-select
    // 'https://the-internet.herokuapp.com/tables' - web tables
    // https://the-internet.herokuapp.com/javascript_alerts - alerts
    // https://demo.opencart.com/ ---mouse over
});