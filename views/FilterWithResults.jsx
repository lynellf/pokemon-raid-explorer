import { Container } from "@mantine/core";
import Filters from "components/Filters";
import TabbedSuggestions from "components/TabbedSuggestions";
import usePokemonDataFilters from "hooks/usePokemonDataFilters";

export default function FilterWithResults() {
  const { nonTeamSuggestions, teamSuggestions, handleChange, query } =
    usePokemonDataFilters();

  return (
    <Container>
      <Filters query={query} handleChange={handleChange} />
      <TabbedSuggestions
        nonTeamSuggestions={nonTeamSuggestions}
        teamSuggestions={teamSuggestions}
      />
    </Container>
  );
}
