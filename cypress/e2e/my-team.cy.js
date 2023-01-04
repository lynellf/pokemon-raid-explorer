describe("storing and displaying a list of specific pokemon", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });

  const team = ["Abomasnow", "Charmander", "Pikachu"];

  it("displays view for adding/removing pokemon to 'My Team'", () => {
    cy.findAllByText("My Team").first().click();
    cy.findByLabelText("Close My Team").click();
    // we want to wait for the modal overlay to appear, so we'll use a .then()
  });

  it("adds pokemon to my team", () => {
    cy.clearLocalDB();
    cy.openMyTeam();

    cy.wrap(team).each((pokemonName) => {
      cy.addToMyTeam(pokemonName);
    });
  });

  it('"remembers" my team after a page reload', () => {
    cy.openMyTeam();
    cy.findAllByText("Remove").should("have.lengthOf", team.length);
  });

  it("has no detectable a11y violations", () => {
    cy.openMyTeam();
    cy.checkA11yWithBetterLogs("div[aria-label='My Team Modal']");
  });

  it("removes pokemon from my team", () => {
    cy.openMyTeam();
    cy.findAllByText("Remove").each((removeBtn) => {
      cy.wrap(removeBtn).click();
    });

    cy.findByText("Remove").should("not.exist");
  });
});
