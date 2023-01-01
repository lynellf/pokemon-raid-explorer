function addToMyTeam(pokemonName) {
  return cy
    .findByLabelText("Add a Pokemon to My Team")
    .clear()
    .type(pokemonName)
    .type("{downArrow}{enter}");
}

Cypress.Commands.add("addToMyTeam", addToMyTeam);
