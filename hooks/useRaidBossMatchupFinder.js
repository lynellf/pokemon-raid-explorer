import { useMemo } from "react";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { asTable as pokemonTable } from "data/pokemon-results-list";
import usePokemonDataFilters from "hooks/usePokemonDataFilters";

// Event Types
export const EVENT_SEND_RAID_BOSS = "SEND_RAID_BOSS";
export const EVENT_SEND_TERA_TYPE = "SEND_TERA_TYPE";

// States
const STATE_IDLE = "IDLE";
const STATE_FILTERING = "FILTERING";
// should the machine transition to idle or filtering state
const STATE_THINKING = "THINKING";

// Guards
const canFilter = ({ raidBossName, teraType }) => {
  // ensure each value is not falsy
  const hasValues = [raidBossName, teraType].every(Boolean);

  return hasValues;
};

// Actions
const setRaidBossName = assign({
  raidBossName: (context, event) => (context.raidBossName = event.data.value)
});

const setTeraType = assign({
  teraType: (context, event) => (context.teraType = event.data.value)
});

const sendFilters =
  (handleChange) =>
  ({ raidBossName, teraType }) => {
    const raidBoss = pokemonTable[raidBossName];

    const raidBossTypes = raidBoss.types;

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
        teraType: ""
      },
      states: {
        [STATE_IDLE]: {
          on: {
            [EVENT_SEND_RAID_BOSS]: {
              target: STATE_THINKING,
              actions: ["setRaidBossName"]
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
        setRaidBossName,
        setTeraType,
        sendFilters: sendFilters(handleChange)
      }
    }
  );

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
  const [_state, send] = useMachine(machine);

  return { send, results };
}

/**
 * Why does this exist?
 */
