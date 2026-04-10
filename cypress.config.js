const { defineConfig } = require('cypress');

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    video: true, 

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});