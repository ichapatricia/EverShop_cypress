const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer"); //--> Tambahkan ini
module.exports = defineConfig({
  allowCypressEnv: true,
  projectId: "skncad",

  e2e: {
    experimentalPromptCommand: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config); //--> Tambahkan ini
      return config; //--> Tambahkan ini
      // implement node event listeners here
    },
    env:{
      allure: true //tambahan gemini
    }
  },
});
