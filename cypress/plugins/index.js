/// <reference types="cypress" />
 /**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
  }
const dotenvPlugin = require('cypress-dotenv');
module.exports = (on, config) => {
    config = dotenvPlugin(config)
    return config
  }