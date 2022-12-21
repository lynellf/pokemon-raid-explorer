import { Container } from "@mantine/core";
import MatchupFinderInputs from "components/MatchupFinderInputs";
import TabbedSuggestions from "components/TabbedSuggestions";
import useRaidBossMatchupFinder from "hooks/useRaidBossMatchupFinder";

export default function MatchupFinder() {
  const { send, teamSuggestions, nonTeamSuggestions } =
    useRaidBossMatchupFinder();

  return (
    <Container>
      <MatchupFinderInputs send={send} />
      <TabbedSuggestions
        nonTeamSuggestions={nonTeamSuggestions}
        teamSuggestions={teamSuggestions}
      />
    </Container>
  );
}
