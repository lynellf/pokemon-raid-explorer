import { useState } from "react";
import sift from "sift";
import pokemonResultList from "data/pokemon-results-list";
import moveTable from "data/move-table";
import typeTable from "data/type-table";

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
  baseSpeed: { op: "gte", value: 0 }
};

function handleChange(setQuery) {
  return ({ key, value }) =>
    setQuery((current) => ({ ...current, [key]: value }));
}
/**
 * @description array filter callback function for sake of readability within hook body
 * @param {string[]} typeCoverage list of types a pokemon may be "super effective" against
 */
const byTypeCoverage = (typeCoverage) => {
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
};

export default function usePokemonDataFilters() {
  const [query, setQuery] = useState(initialQuery);
  const {
    moves,
    abilities,
    resistances,
    typeCoverage,
    baseHp,
    baseAtk,
    baseDef,
    baseSpa,
    baseSpeed
  } = query;

  const results = pokemonResultList
    .filter(
      sift({
        moves: { $all: moves },
        abilities: { $all: abilities },
        resistances: { $all: resistances },
        typeCoverage: { $all: typeCoverage },
        "baseStats.baseHP": { [`$${baseHp.op}`]: baseHp.value },
        "baseStats.baseAtk": { [`$${baseAtk.op}`]: baseAtk.value },
        "baseStats.baseDef": { [`$${baseDef.op}`]: baseDef.value },
        "baseStats.baseSpa": { [`$${baseSpa.op}`]: baseSpa.value },
        "baseStats.baseSpeed": { [`$${baseSpeed.op}`]: baseSpeed.value }
      })
    )
    .map((data) => {
      return {
        ...data,
        suggestedMoves: data.moves.filter(byTypeCoverage(typeCoverage))
      };
    });

  return {
    query,
    results,
    handleChange: handleChange(setQuery)
  };
}
