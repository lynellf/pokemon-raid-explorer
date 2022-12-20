import { useState } from "react";
import { sum } from "simple-statistics";
import { curry } from "lodash";
import sift from "sift";
import pokemonResultList from "data/pokemon-results-list";
import moveTable from "data/move-table";
import typeTable from "data/type-table";
import useMyTeam from "hooks/useMyTeam";

/**
 * Each key/value represents an individual filter applied
 * to the list of pokemon data items available
 */
export const initialQuery = {
  moves: [],
  abilities: [],
  resistances: [],
  typeCoverage: [],
  baseHp: { op: "gte", value: 0 },
  baseAtk: { op: "gte", value: 0 },
  baseDef: { op: "gte", value: 0 },
  baseSpa: { op: "gte", value: 0 },
  baseSpd: { op: "gte", value: 0 },
  baseSpeed: { op: "gte", value: 0 }
};

export default function usePokemonDataFilters() {
  const [query, setQuery] = useState(initialQuery);
  const { team, isReady } = useMyTeam();
  const byAllQueries = curry(applyQueryObj);
  const withSuggestedMoves = curry(appendSuggestedMoves);

  const nonTeamSuggestions = pokemonResultList
    .filter(byAllQueries(query))
    .map(withSuggestedMoves(query))
    .sort(byBaseStatTotal);

  const teamSuggestions = isReady
    ? team
        .filter(byAllQueries(query))
        .map(withSuggestedMoves(query))
        .sort(byBaseStatTotal)
    : [];

  return {
    query,
    nonTeamSuggestions,
    teamSuggestions,
    handleChange: handleChange(setQuery)
  };
}

/**
 * @param {typeof initialQuery} queryObj
 * @param {typeof pokemonResultList[number]} pokemon
 */
function appendSuggestedMoves(queryObj, pokemon) {
  return {
    ...pokemon,
    suggestedMoves: pokemon.moves.filter(byTypeCoverage(queryObj.typeCoverage))
  };
}

/**
 * @param {typeof initialQuery} queryObj
 * @param {typeof pokemonResultList[number]} pokemon
 */
function applyQueryObj(queryObj, pokemon) {
  const {
    moves,
    abilities,
    resistances,
    typeCoverage,
    baseHp,
    baseAtk,
    baseDef,
    baseSpa,
    baseSpd,
    baseSpeed
  } = queryObj;

  return sift({
    moves: { $all: moves },
    abilities: { $all: abilities },
    resistances: { $all: resistances },
    typeCoverage: { $all: typeCoverage },
    "baseStats.baseHP": { [`$${baseHp.op}`]: baseHp.value },
    "baseStats.baseAtk": { [`$${baseAtk.op}`]: baseAtk.value },
    "baseStats.baseDef": { [`$${baseDef.op}`]: baseDef.value },
    "baseStats.baseSpa": { [`$${baseSpa.op}`]: baseSpa.value },
    "baseStats.baseSpd": { [`$${baseSpd.op}`]: baseSpd.value },
    "baseStats.baseSpeed": { [`$${baseSpeed.op}`]: baseSpeed.value }
  })(pokemon);
}

function handleChange(setQuery) {
  return ({ key, value }) =>
    setQuery((current) => ({ ...current, [key]: value }));
}
/**
 * @description array filter callback function for sake of readability within hook body
 * @param {string[]} typeCoverage list of types a pokemon may be "super effective" against
 */
function byTypeCoverage(typeCoverage) {
  return (moveName) => {
    const { moveType, moveCategory } = moveTable[moveName.trim()];
    const isOtherMove = moveCategory.trim().toLowerCase().includes("other");
    if (isOtherMove) {
      return false;
    }
    const moveTypeTrimmed = moveType.trim().toLowerCase();
    const moveCoverage = typeTable.attacking[moveTypeTrimmed] ?? [];
    const hasCoverage = moveCoverage.some((type) =>
      typeCoverage.includes(type)
    );
    return hasCoverage;
  };
}

/**
 * @description Array filter callback. We want to sort results by their base
 * stat total, from highest to lowest. At least by default.
 * @param {typeof pokemonResultList[number]} a
 * @param {typeof pokemonResultList[number]} z
 */
function byBaseStatTotal(a, z) {
  const sumOfA = sum(Object.values(a.baseStats).map(Number));
  const sumOfZ = sum(Object.values(z.baseStats).map(Number));

  // ensures descending order when subtracing A from Z
  return sumOfZ - sumOfA;
}
