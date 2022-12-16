import { useMemo } from "react";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { asTable as pokemonTable } from "data/pokemon-results-list";
import usePokemonDataFilters from "hooks/usePokemonDataFilters";
import asPercent from "utils/asPercent";

// Event Types
export const EVENT_SEND_RAID_BOSS = "SEND_RAID_BOSS";
export const EVENT_SEND_TERA_TYPE = "SEND_TERA_TYPE";

// States
const STATE_IDLE = "IDLE";
const STATE_FILTERING = "FILTERING";
// should the machine transition to idle or filtering state
const STATE_THINKING = "THINKING";

// Guards
const canFilter = ({ raidBoss, teraType }) => {
  // ensure each value is not falsy
  const hasValues = [raidBoss.name, teraType].every(Boolean);

  return hasValues;
};

// Actions
const setRaidBoss = assign({
  raidBossName: (context, event) => {
    context.raidBoss = pokemonTable[event.data.value];
  }
});

const setTeraType = assign({
  teraType: (context, event) => (context.teraType = event.data.value)
});

const sendFilters =
  (handleChange) =>
  ({ teraType, raidBoss }) => {
    const raidBossTypes = raidBoss.types;

    console.log({ raidBoss });

    // must be able to resist these types
    handleChange({ key: "resistances", value: raidBossTypes });
    // should be effective against the tera type
    handleChange({ key: "typeCoverage", value: [teraType] });
  };

const raidBossMatchupMachine = (handleChange) =>
  createMachine(
    {
      id: "raid-boss-matchups",
      initial: STATE_IDLE,
      predictableActionArguments: true,
      context: {
        raidBossName: "",
        teraType: "",
        raidBoss: { quantiles: { baseSpd: 0, baseDef: 0 } }
      },
      states: {
        [STATE_IDLE]: {
          on: {
            [EVENT_SEND_RAID_BOSS]: {
              target: STATE_THINKING,
              actions: ["setRaidBoss"]
            },
            [EVENT_SEND_TERA_TYPE]: {
              target: STATE_THINKING,
              actions: ["setTeraType"]
            }
          }
        },
        [STATE_THINKING]: {
          always: [
            { target: STATE_FILTERING, cond: canFilter },
            { target: STATE_IDLE }
          ]
        },
        [STATE_FILTERING]: {
          always: [{ target: STATE_IDLE, actions: ["sendFilters"] }]
        }
      }
    },
    {
      actions: {
        setRaidBoss,
        setTeraType,
        sendFilters: sendFilters(handleChange)
      }
    }
  );

/**
 * @description Responsible for the synchronization and dispatch of a selected "Raid Boss's"
 * types and tera type with `usePokemonDataFilters`, as the hook will attempt to filter data
 * after each "handleChange" event. This hook ensures the needed events are dispatched in a
 * single batch.
 */
export default function useRaidBossMatchupFinder() {
  const { handleChange, results } = usePokemonDataFilters();
  const machine = useMemo(
    () => raidBossMatchupMachine(handleChange),
    [handleChange]
  );
  /**
   * A new machine is created on render, xstate doesn't like this,
   * but it appears to work just fine here.
   * See this github issue for more information:
   * https://github.com/statelyai/xstate/issues/995
   */
  const [state, send] = useMachine(machine);

  /**
   * @type {typeof pokemonTable[string]}
   */
  const {
    quantiles: { baseSpd, baseDef }
  } = state.context.raidBoss;

  // by offensive advantages
  const offensivePriority =
    asPercent(baseSpd) - asPercent(baseDef) > -1 ? "baseAtk" : "baseSpa";

  // sorting by descending order
  const sortedResults = results.sort((a, z) => {
    return z.baseStats[offensivePriority] - a.baseStats[offensivePriority];
  });

  return { send, results: sortedResults };
}

/**
 * Why does this exist?
 */
