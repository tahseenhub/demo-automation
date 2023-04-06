const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'demo',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    testIsolation: false,
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 15000,
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
});
