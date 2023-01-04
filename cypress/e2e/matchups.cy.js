describe("finding suitable counters for a specific raid boss and its tera type", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.injectAxe();
  });

  it("displays a list of available counters for a raid boss", () => {
    cy.selectBoss("Abomasnow", "Normal").then(() => {
      cy.findByText("No Results").should("not.exist");
    });
  });

  it("does not display a list of counters for a raid boss as no counters for it exist", () => {
    cy.selectBoss("Annihilape", "Normal").then(() => {
      cy.findByText("No Results").should("exist");
    });
  });

  it("has no detectable a11y violations", () => {
    cy.checkA11yWithBetterLogs("#appContent");
  });
});
