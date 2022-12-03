import { quantileRank } from "simple-statistics";
import pokemonTable from "data/pokemon-table";
import typeTable from "data/type-table";
import capitalizeFirstChar from "utils/capitalizeFirstChar";

const asNumValues = (record) =>
  Object.fromEntries(
    Object.entries(record).map(([key, val]) => [key, Number(val)])
  );

// curried array map callback for the sake of readability
const asFormattedPokemonData =
  ({ name, baseStats, moves, abilities }) =>
  ({ form, types }) => ({
    // if a non-normal form exists include the form distinction within the pokemon's name
    name: `${name}${form !== "Normal" ? ` (${form})` : ""}`,
    // we need to use a lowercase form name as the form name's first char is capitalized
    baseStats: asNumValues(baseStats[form.toLowerCase()] ?? {}),
    // its possible pokemon have duplicate abilities listed, remove dupes with a set
    abilities: Array.from(new Set(abilities)),
    // we need to parse out moves which are exclusive to specific forms
    moves: Object.entries(moves)
      .filter(([_moveName, moveForms]) => moveForms.includes(form))
      .map(([moveName]) => moveName),
    // pokemon types are listed as ["<typeName>-type"]
    // eg. ["Bug-type"]
    // for the sake of lookup and easier value matching, strip out the -type suffix
    types: types.map((type) => type.split("-type")[0].trim())
  });

// pokemonTable in list form
/**
 * @type {{ name: string; baseStats: Record<string, string>; moves: string[]; abilities: string[]; types: string[] }[]}
 */
const pokemonList = Object.entries(pokemonTable).flatMap(([name, data]) => {
  // some pokemon may have alternate forms with different base stat totals and movesets
  // they need to be listed as individual pokemon separate from its normal form
  const { forms, baseStats, abilities, moves } = data;
  return forms.map(
    asFormattedPokemonData({ name, baseStats, moves, abilities })
  );
});

// we want quantile ranks of each of the pokemon's base stats
// to do this, we'll need to generate a list of all base stats

const baseStatKeys = Object.keys(pokemonList[0]?.baseStats ?? {});

// array map callback only for the sake of ease of re-use and readability
const byStat = (keyname) => (query) => Number(query?.baseStats?.[keyname] ?? 0);

const allBaseStats = baseStatKeys.map((keyname) => {
  return pokemonList.map(byStat(keyname));
});

const getQuantileRk = (data, index) =>
  quantileRank(
    allBaseStats[index],
    Number(data.baseStats[baseStatKeys[index]])
  );

// pokemon list to display within the results component
const pokemonResultList = pokemonList
  .map((data) => ({
    // apply quantile ranks
    ...data,
    quantiles: {
      hp: getQuantileRk(data, 0),
      atk: getQuantileRk(data, 1),
      def: getQuantileRk(data, 2),
      spa: getQuantileRk(data, 3),
      spd: getQuantileRk(data, 4),
      speed: getQuantileRk(data, 5)
    }
  }))
  .map((data) => ({
    // apply type resistances
    ...data,
    // its possible to have duplicates listed here
    // ie. both Flying and Fire types (Charizard) resist Grass types

    /**
     * @type {string[]}
     */
    resistances: Array.from(
      new Set(
        data.types.flatMap((type) => typeTable.defending[type.toLowerCase()])
      )
    )
  }))
  .map((data) => ({
    // apply type weaknesses
    ...data,
    // we have to find which types a pokemon are weak to
    // through using fairly ineffecient means of lookup here
    // the weaknesses may contain duplicates, so we're also removing them with a set
    weaknesses: Array.from(
      new Set(
        data.types.flatMap((type) =>
          Object.entries(typeTable.attacking)
            .filter(([_weakness, typesCovered]) => typesCovered.includes(type))
            .map(([weakness]) => capitalizeFirstChar(weakness))
        )
      )
    )
  }));

export default pokemonResultList;
