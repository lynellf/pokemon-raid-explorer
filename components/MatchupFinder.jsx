import { Container } from "@mantine/core";
import MatchupFinderInputs from "components/MatchupFinderInputs";
import useRaidBossMatchupFinder from "hooks/useRaidBossMatchupFinder";
import Suggestions from "components/Suggestions";

export default function MatchupFinder() {
  const { send, teamSuggestions, nonTeamSuggestions } =
    useRaidBossMatchupFinder();

  return (
    <Container>
      <MatchupFinderInputs send={send} />
      <Suggestions data={[...teamSuggestions, ...nonTeamSuggestions]} />
    </Container>
  );
}
