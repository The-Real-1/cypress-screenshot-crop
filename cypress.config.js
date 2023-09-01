const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  pageLoadTimeout:60000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  trashAssetsBeforeRuns : false,
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
