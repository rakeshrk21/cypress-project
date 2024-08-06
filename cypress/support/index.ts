/// <reference types="cypress" />

import './commands'; 
import 'cypress-iframe';

beforeEach(() => {
    cy.log('Running before each test');
});