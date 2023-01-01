import { useEffect, useState } from "react";
import { curry } from "lodash";
import localforage from "localforage";

export const STORAGE_KEY = "pokemon-raid-explorer-team";

/**
 * @type {{ isReady: boolean; team: string[] }}
 * @description since localforge is async we want to use a "isReady" flag
 * to communicate team data may not be available after the first render
 */
const initialState = { isReady: false, team: [] };

/**
 * @description Responsible for getting/setting team members to/from local storage
 */
export default function useMyTeam() {
  const [{ team, isReady }, setTeam] = useState(initialState);
  const onMemberChange = curry(toggleTeamMember);
  const handleMemberChange = onMemberChange(setTeam);

  // synchronize local storage with myTeam after first render
  useEffect(() => {
    localforage
      .getItem(STORAGE_KEY)
      .then((team) => setTeam({ team: team ?? [], isReady: true }))
      .catch(() => {
        console.log("No team found in storage, initializing team storage");
        localforage.setItem(STORAGE_KEY, []);
      });
  }, []);

  return { team, handleMemberChange, isReady };
}

/**
 * @description adds or removes team members if member name is or isn't within the existing data set
 * @param {(dispatch: (current: string[]) => string[]) => void} setTeam
 * @param {string} memberName
 */
function toggleTeamMember(setTeam, memberName) {
  setTeam((current) => {
    const shallRemoveMember = current.team?.includes(memberName);

    if (shallRemoveMember) {
      const updatedTeam = current.team.filter((m) => m !== memberName);

      // sync with local storage
      localforage.setItem(STORAGE_KEY, updatedTeam);

      return { ...current, team: updatedTeam };
    }

    const updatedTeam = [...current.team, memberName];

    // sync with local storage
    localforage.setItem(STORAGE_KEY, updatedTeam);
    return { ...current, team: updatedTeam };
  });
}
