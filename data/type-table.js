import capitalizeFirstChar from "utils/capitalizeFirstChar";

const typeTable = {
  // which move types are super effective against other types?
  // ie. bug type moves are "super effective" against grass-type pokemon
  attacking: {
    bug: ["Grass", "Psychic", "Dark"],
    dark: ["Ghost", "Psychic"],
    dragon: ["Dragon"],
    electric: ["Flying", "Water"],
    fairy: ["Dark", "Dragon", "Fighting"],
    fighting: ["Normal", "Rock", "Steel", "Dark"],
    fire: ["Bug", "Steel", "Grass", "Ice"],
    flying: ["Fighting", "Bug", "Grass"],
    ghost: ["Ghost", "Psychic"],
    grass: ["Ground", "Rock", "Water"],
    ground: ["Rock", "Steel", "Fire", "Electric", "Poison"],
    ice: ["Flying", "Ground", "Grass", "Dragon"],
    normal: [],
    poison: ["Grass", "Fairy"],
    psychic: ["Fighting", "Poison"],
    rock: ["Flying", "Bug", "Fire", "Ice"],
    steel: ["Rock", "Ice", "Fairy"],
    water: ["Ground", "Rock", "Fire"]
  },
  // which pokemon types can resist other move types?
  // ie. grass is "not very effective" against bug-type pokemon
  defending: {
    bug: ["Grass", "Fighting", "Ground"],
    dark: ["Psychic", "Ghost", "Dark"],
    dragon: ["Grass", "Electric", "Fire", "Water"],
    electric: ["Electric", "Flying"],
    fairy: ["Dragon", "Dark", "Bug", "Fighting"],
    fighting: ["Bug", "Rock", "Dark"],
    fire: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    flying: ["Fighting", "Ground", "Grass", "Bug"],
    ghost: ["Normal", "Fighting"],
    grass: ["Water", "Electric", "Grass", "Ground"],
    ground: ["Poison", "Rock", "Electric"],
    ice: ["Ice"],
    normal: ["Ghost"],
    poison: ["Grass", "Poison", "Fighting", "Bug"],
    psychic: ["Fighting", "Psychic"],
    rock: ["Normal", "Fire", "Poison", "Flying"],
    steel: [
      "Normal",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    water: ["Water", "Steel"]
  },
  immunity: {
    bug: [],
    dark: ["Psychic"],
    dragon: [],
    electric: [],
    fairy: ["Dragon"],
    fighting: [],
    fire: [],
    flying: ["Ground"],
    ghost: ["Normal", "Fighting"],
    grass: [],
    ground: ["Electric"],
    ice: [],
    normal: ["Ghost"],
    poison: [],
    psychic: [],
    rock: [],
    steel: ["Poison"],
    water: []
  }
};

export const asList = Object.keys(typeTable.attacking)
  .sort()
  .map((type) => capitalizeFirstChar(type));

export default typeTable;
