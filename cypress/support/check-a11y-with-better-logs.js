// copied from https://www.npmjs.com/package/cypress-axe
function terminalLog(violations) {
  // what is cy.task doing here?
  // it's asking node to perform a console log
  // see https://docs.cypress.io/api/commands/task
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  );

  cy.task("table", violationData);
}

function checkA11yWithBetterLogs(context, options) {
  return cy.checkA11y(context, options, terminalLog);
}

// log output should appear as the linked screenshot below
//https://github.com/component-driven/cypress-axe/blob/HEAD/terminal_output_example.png
Cypress.Commands.add("checkA11yWithBetterLogs", checkA11yWithBetterLogs);
