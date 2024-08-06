import { defineConfig } from 'cypress';

export default defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
 "defaultCommandTimeout": 10000,
  "requestTimeout": 10000,
  "responseTimeout": 10000,
  "execTimeout": 10000,
  "pageLoadTimeout": 10000,
  "chromeWebSecurity": false,
  "includeShadowDom": true,
  reporter: 'mocha-junit-reporter',
  "reporterOptions": {
    "mochaFile": "cypress/results/results-[hash].xml",
    "toConsole": true
  },
  e2e: {
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/**/*.ts',
    // baseUrl: "https://automationteststore.com/",
    baseUrl: "https://react-redux.realworld.io/", 
    setupNodeEvents(on, config) {
      // Return the config object
      return config;
    },
  },
});
