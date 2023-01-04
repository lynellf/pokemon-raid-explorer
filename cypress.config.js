const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(...args) {
          console.log.apply(this, args);
          return null;
        },
        table(...args) {
          console.table.apply(this, args);
          return null;
        }
      });
    }
  }
});
