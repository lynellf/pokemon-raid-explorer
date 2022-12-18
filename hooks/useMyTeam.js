import { useEffect, useState } from "react";
import localforage from "localforage";
import { curry } from "lodash";

const STORAGE_KEY = "pokemon-raid-explorer-team";

/**
 * @type {string[]}
 */
const initialState = [];

/**
 * @description Responsible for getting/setting team members to/from local storage
 */
export default function useMyTeam() {
  const [team, setTeam] = useState(initialState);
  const handleMemberChange = curry(toggleTeamMember, 2);

  // synchronize local storage with myTeam after first render
  useEffect(() => {
    localforage
      .getItem(STORAGE_KEY)
      .then((team) => setTeam(team ?? []))
      .catch(() => {
        console.log("No team found in storage, initializing");
        localforage.setItem(STORAGE_KEY, []);
      });
  }, []);

  return { team, handleMemberChange };
}

/**
 * @description adds or removes team members if member name is or isn't within the existing data set
 * @param {(dispatch: (current: string[]) => string[]) => void} setTeam
 * @param {string} memberName
 */
function toggleTeamMember(setTeam, memberName) {
  setTeam((currentTeam) => {
    const shallRemoveMember = currentTeam.includes(memberName);

    if (shallRemoveMember) {
      const updatedTeam = currentTeam.filter((m) => m !== memberName);

      // sync with local storage
      localforage.setItem(STORAGE_KEY, updatedTeam);

      return updatedTeam;
    }

    const updatedTeam = [...currentTeam, memberName];

    // sync with local storage
    localforage.setItem(STORAGE_KEY, updatedTeam);
    return updatedTeam;
  });
}
