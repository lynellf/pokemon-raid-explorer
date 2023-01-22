import { test as base, expect } from "@playwright/test";
import { locatorFixtures } from "@playwright-testing-library/test/fixture";
import { injectAxe, checkA11y, getViolations } from "axe-playwright";
import selectRaidBoss from "./helpers/select-raid-boss";

/**
 * @type {import('types').TTest}
 */
const it = base.extend(locatorFixtures);

const { beforeEach, describe } = it;

describe("finding suitable counters for a specific raid boss and its tera type", () => {
  beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    await injectAxe(page);
  });

  it("displays a list of available raid boss counters", async ({ screen }) => {
    await selectRaidBoss(screen, "Abomasnow", "Normal");

    const noResultsTitle = await screen
      .findByText("No Results")
      .catch(() => null);

    expect(noResultsTitle).toBeFalsy();
  });

  it("does not display a list of counters for a raid boss as no counters for it exist", async ({
    screen
  }) => {
    await selectRaidBoss(screen, "Annihilape", "Normal");

    const noResultsTitle = await screen
      .findByText("No Results")
      .catch(() => null);

    expect(noResultsTitle).toBeTruthy();
  });

  it("has no detectable a11y violations", async ({ page }) => {
    const violations = await getViolations(page);
    console.log(
      violations.map((violation) => ({
        ...violation,
        nodes: violation.nodes.map((node) => node.html)
      }))
    );
    expect(violations.length).toBeFalsy();
  });
});
