declare namespace Cypress {
    interface Chainable<Subject>{
      /**
       * Custom command to log in a user
       * @example cy.userLogin('username', 'password')
       */
      userLogin(username: string, password: string): Chainable<void>;
      // iframe(selector?: string): Chainable<JQuery<HTMLElement>>;
      // frameLoaded(selector?: string): Chainable<JQuery<HTMLElement>>;
    }
  }
  