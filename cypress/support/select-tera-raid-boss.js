function selectTeraRaidBoss(pokemonName, pokemonType) {
  return cy
    .findByLabelText("Raid Boss Selection Input")
    .type(pokemonName)
    .type("{downArrow}{enter}")
    .then(() => {
      cy.findByLabelText("Tera Type Selection Input")
        .type(pokemonType)
        .type("{downArrow}{enter}");
    });
}

Cypress.Commands.add("selectBoss", selectTeraRaidBoss);
