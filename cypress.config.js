const { defineConfig } = require('cypress')

module.exports = defineConfig({
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  experimentalStudio: true,
  video: false,
  retries: {
    runMode: 1,
  },
  trashAssetsBeforeRuns: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    json: true,
    timestamp: 'ddmmyyyy_HHMM',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/features/**/*.feature',
    excludeSpecPattern: ['**/*AUTOMATIZAR*.feature'],
    baseUrl: 'https://connect.pagbrasil.com',
  },
})
