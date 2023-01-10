import { useMemo } from "react";
import { Select, List, Divider, Button, Title } from "@mantine/core";
import { curry } from "lodash";
import styled from "styled-components";
import useMyTeam from "hooks/useMyTeam";
import pokemonResultList from "data/pokemon-results-list";

const FixedHeightList = styled(List)`
  max-height: 80vh;
  overflow-y: scroll;
  margin-top: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

function ListItem({ name, onClick }) {
  const handleRemove = curry(onRemove);
  return (
    <li>
      <Divider />
      <FlexContainer>
        <span>{name}</span>
        <Button onClick={handleRemove({ name, onClick })} color="red">
          Remove
        </Button>
      </FlexContainer>
    </li>
  );
}

export default function MyTeam() {
  const { team, handleMemberChange } = useMyTeam();
  const selectOptions = useMemo(
    () =>
      pokemonResultList
        .map(({ name }) => name)
        .sort()
        .filter((name) => !team.includes(name))
        .map((name) => ({ label: name, value: name })),
    [team]
  );

  return (
    <>
      <Title order={2}>My Team</Title>
      <div>
        <p>Already have Pokemon to use for Tera raids? Add them here!</p>
      </div>
      <Select
        aria-label="Add a Pokemon to My Team"
        label="Add Pokemon to team"
        placeholder="Add a Pokemon to My Team"
        data={selectOptions}
        searchable
        onChange={handleMemberChange}
      />
      <FixedHeightList listStyleType="none">
        {team.sort().map((p) => (
          <ListItem onClick={handleMemberChange} key={p} name={p} />
        ))}
      </FixedHeightList>
    </>
  );
}

function onRemove({ name, onClick }, _event) {
  onClick(name);
}
