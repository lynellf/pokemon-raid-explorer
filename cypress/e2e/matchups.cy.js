describe("finding suitable counters for a specific raid boss and its tera type", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("displays a list of available counters for a raid boss", () => {
    cy.selectBoss("Abomasnow", "Normal");
    cy.findByText("No Results").should("not.exist");
  });

  it("does not display a list of counters for a raid boss as no counters for it exist", () => {
    cy.selectBoss("Annihilape", "Normal");
    cy.findByText("No Results").should("exist");
  });
});
