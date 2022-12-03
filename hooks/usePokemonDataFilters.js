import { useState } from "react";
import sift from "sift";
import pokemonResultList from "data/pokemon-results-list";

/**
 * Each key/value represents an individual filter applied
 * to the list of pokemon data items available
 */
export const initialQuery = {
  moves: [],
  abilities: [],
  resistances: [],
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

export default function usePokemonDataFilters() {
  const [query, setQuery] = useState(initialQuery);
  const {
    moves,
    abilities,
    resistances,
    baseHp,
    baseAtk,
    baseDef,
    baseSpa,
    baseSpeed
  } = query;

  const results = pokemonResultList.filter(
    sift({
      moves: { $all: moves },
      abilities: { $all: abilities },
      resistances: { $all: resistances },
      "baseStats.baseHP": { [`$${baseHp.op}`]: baseHp.value },
      "baseStats.baseAtk": { [`$${baseAtk.op}`]: baseAtk.value },
      "baseStats.baseDef": { [`$${baseDef.op}`]: baseDef.value },
      "baseStats.baseSpa": { [`$${baseSpa.op}`]: baseSpa.value },
      "baseStats.baseSpeed": { [`$${baseSpeed.op}`]: baseSpeed.value }
    })
  );

  return {
    query,
    results,
    handleChange: handleChange(setQuery)
  };
}
