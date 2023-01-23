/**
 * @param {import("@testing-library/dom").Screen} screen
 */
export default async function selectRaidBoss(screen, pokemonName, teraType) {
  const raidBossInput = await screen.findByLabelText(
    "Raid Boss Selection Input"
  );

  await raidBossInput.click();
  await raidBossInput.type(pokemonName);
  await raidBossInput.press("ArrowDown");
  await raidBossInput.press("Enter");

  const teraTypeInput = await screen.findByLabelText(
    "Tera Type Selection Input"
  );

  await teraTypeInput.click();
  await teraTypeInput.type(teraType);
  await teraTypeInput.press("ArrowDown");
  await teraTypeInput.press("Enter");
}
