function openMyTeam() {
  return cy.findAllByText("My Team").first().click();
}

Cypress.Commands.add("openMyTeam", openMyTeam);
