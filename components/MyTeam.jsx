import { Select, List, Divider, Button, Container } from "@mantine/core";
import styled from "styled-components";
import pokemonResultsList from "data/pokemon-results-list";

const selectOptions = pokemonResultsList.map(({ name }) => ({
  label: name,
  value: name
}));

const sampleTeam = pokemonResultsList
  .map(({ name }) => ({ name }))
  .slice(0, 10);

const FixedHeightList = styled(List)`
  max-height: 600px;
  overflow-y: scroll;
  margin-top: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

function ListItem(props) {
  return (
    <>
      <Divider />
      <li>
        <FlexContainer>
          <span>{props.name}</span>
          <Button color="red">Remove</Button>
        </FlexContainer>
      </li>
    </>
  );
}

export default function MyTeam() {
  return (
    <Container>
      <div>
        <p>Already have Pokemon to use for Tera raids? Add them here!</p>
      </div>
      <Select label="Add Pokemon to team" data={selectOptions} searchable />
      <FixedHeightList listStyleType="none">
        {sampleTeam.map((p) => (
          <ListItem key={p.name} name={p.name} />
        ))}
      </FixedHeightList>
    </Container>
  );
}
