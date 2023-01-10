const team = ["Abomasnow", "Charmander", "Pikachu"];
const route = "http://localhost:3000/my-team";
describe("storing and displaying a list of specific pokemon", () => {
  it("adds pokemon to my team", () => {
    cy.clearLocalDB();
    cy.visit(route).then(() => {
      cy.wrap(team).each((pokemonName) => {
        cy.addToMyTeam(pokemonName);
      });
    });
  });

  it('"remembers" my team after a page reload', () => {
    cy.visit(route).then(() => {
      cy.findAllByText("Remove").should("have.lengthOf", team.length);
    });
  });

  it("has no detectable a11y violations", () => {
    cy.openMyTeam();
    cy.checkA11yWithBetterLogs("div[aria-label='My Team Modal']");
  });

  it("removes pokemon from my team", () => {
    cy.visit(route).then(() => {
      cy.findAllByText("Remove").each((removeBtn) => {
        cy.wrap(removeBtn).click();
      });

      cy.findByText("Remove").should("not.exist");
    });
  });
});
