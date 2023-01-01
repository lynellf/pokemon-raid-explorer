// cypress' api doesn't have any methods for clearing anything other than
// session storage and local storage
// this function will clear the data stored by localForage, which uses indexedDB by default
// see https://github.com/cypress-io/cypress/issues/1208#issuecomment-359321389

// clears IndexedDb storage
function clearLocalDB() {
  return cy.visit("http://localhost:3000").then(() => {
    import("localforage").then((lib) => {
      lib.default.clear();
    });
  });
}

Cypress.Commands.add("clearLocalDB", clearLocalDB);
