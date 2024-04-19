const { defineConfig } = require("cypress");
const { generateRandomString } = require("./cypress/support/functions");



module.exports = defineConfig({
  env: {
    userName: `Amir${generateRandomString(4)}`,
    password: `32${generateRandomString(4)}`
  },

  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
