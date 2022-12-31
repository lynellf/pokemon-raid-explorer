function selectTeraRaidBoss(pokemonName, pokemonType) {
  return cy
    .findByPlaceholderText("Select Raid Boss")
    .type(pokemonName)
    .type("{downArrow}")
    .type("{enter}")
    .then(() => {
      cy.findByPlaceholderText("Select Tera Type")
        .type(pokemonType)
        .type("{downArrow}")
        .type("{enter}");
    });
}

Cypress.Commands.add("selectBoss", selectTeraRaidBoss);
