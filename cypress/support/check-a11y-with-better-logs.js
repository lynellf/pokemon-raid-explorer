// copied from https://www.npmjs.com/package/cypress-axe
/**
 * @param {axe.Result[]} violations
 */
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
  const allNodes = violations.flatMap(({ nodes }) =>
    nodes.map(({ html, failureSummary }) => ({ html, failureSummary }))
  );

  cy.task("table", violationData);

  cy.task("table", allNodes);
}

function checkA11yWithBetterLogs(context, options) {
  return cy.checkA11y(context, options, terminalLog);
}

// log output should appear as the linked screenshot below
//https://github.com/component-driven/cypress-axe/blob/HEAD/terminal_output_example.png
Cypress.Commands.add("checkA11yWithBetterLogs", checkA11yWithBetterLogs);
