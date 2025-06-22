const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.testim.io/',
    setupNodeEvents(on, config) {
      
    },
  },
});
