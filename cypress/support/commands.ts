/*
 ***********************************************
 This example commands.js shows you how to
 create various custom commands and overwrite
 existing commands.

 For more comprehensive examples of custom
 commands please read more here:
 https://on.cypress.io/custom-commands
 ***********************************************
 -- This is a parent command --


 -- This is a child command --
 Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })

 -- This is a dual command --
 Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

 -- This will overwrite an existing command --
 Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
*/

// Logs all cy.log() messages to console output for easier debugging
// import { TestConstants } from './helpers/test-constants';


// Cypress.Commands.add('deleteTenantData', (username, password) => {
//   return cy.then(() => {
//     setCookieAndLogin(username, password).then((cookieValue) => {
//       console.log('cookieValue in spec', cookieValue);
//       deleteTenantDataUsingCookie(password, cookieValue);
//     });
//   });
// });
/**
 * This cypress command is to request a CP_SESSION cookie from the Codev security service.
 * We then take that cookie and inject it into the browser to authenticate into Codev
 *
 */
// Cypress.Commands.add(
//   'login',
//   ({ credentials: { password, username } }: TestUser) => {
//     let userAgent;
//     if (Cypress.browser.isHeadless) {
//       userAgent =
//         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/107.0.5304.121 Safari/537.36';
//     } else {
//       userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Cypress.browser.majorVersion}.0.0.0 Safari/537.36`;
//     }

//     cy.request({
//       method: 'POST',
//       url: `${ConfigService.edgeServerURl}/talent/v1/performance-security-services/login`,
//       qs: {
//         username: username,
//         password: password,
//       },
//       headers: {
//         'X-Origin-Agent': userAgent,
//         'X-Origin-Address': '127.0.0.1',
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     }).then((r) => {
//       const cookies = r.headers['set-cookie'];
//       let firstPart;
//       cookies.forEach((cookie: string) => {
//         firstPart = cookie.split(';')[0];
//         cy.log(firstPart);
//         const secondPart = firstPart.split('=');
//         cy.clearCookies();
//         const domain = ConfigService.performanceUrl.split('//')[1];
//         cy.setCookie(secondPart[0], secondPart[1].toString(), {
//           domain: domain,
//           secure: false,
//         });
//       });
//       cy.visit(`${ConfigService.performanceUrl}/performance`);
//     });
//   }
// );

import { LoginPage } from '../pages/login-page'
import 'cypress-iframe';
import 'cypress-file-upload';

const loginPageObject = new LoginPage()

Cypress.Commands.add('userLogin', (email: string, password : string) => {
  cy.get(loginPageObject.usernameTextField).type(email);
  cy.get(loginPageObject.passwordTextField).type(password);
  cy.get(loginPageObject.submitButton).click()
});

Cypress.on('fail', (error, runnable) => {
  console.log(error.message);
  return false;
});

// Cypress.on('uncaught:exception',(error, runnable) => {
//   console.log(error.message);
//   return false;
// })
