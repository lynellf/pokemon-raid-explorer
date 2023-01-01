import { Container, Select } from "@mantine/core";
import { asTable as pokemonTable } from "data/pokemon-results-list";
import { asList as typeList } from "data/type-table";
import {
  EVENT_SEND_RAID_BOSS,
  EVENT_SEND_TERA_TYPE
} from "hooks/useRaidBossMatchupFinder";

const raidBossSelectOptions = Object.keys(pokemonTable)
  .sort()
  .map((name) => ({ label: name, value: name }));

const typeSelectOptions = typeList.map((value) => ({
  label: value,
  value: value
}));

function onSelectChange(send) {
  return (type) => (value) => {
    if (typeof send === "function") {
      send({ type, data: { value } });
    }
  };
}

/**
 * @typedef {Object} MatchupFinderInputsProps
 * @property {(event: { type: string; data: any }) => void} props.send possible event handler
 * @param {MatchupFinderInputsProps} props
 */
export default function MatchupFinderInputs(props) {
  const { send } = props;
  const handleSelectChange = onSelectChange(send);

  return (
    <Container>
      <Select
        data={raidBossSelectOptions}
        label="Raid Boss"
        onChange={handleSelectChange(EVENT_SEND_RAID_BOSS)}
        aria-label="Raid Boss Selection Input"
        placeholder="Select Raid Boss"
        searchable
      />
      <Select
        data={typeSelectOptions}
        label="Raid Boss Tera Type"
        onChange={handleSelectChange(EVENT_SEND_TERA_TYPE)}
        placeholder="Select Tera Type"
        aria-label="Tera Type Selection Input"
        searchable
      />
    </Container>
  );
}
