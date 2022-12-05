import { Container } from "@mantine/core";
import usePager from "hooks/usePager";
import MatchupFinderInputs from "components/MatchupFinderInputs";
import Results from "components/Results";
import useRaidBossMatchupFinder from "hooks/useRaidBossMatchupFinder";

export default function MatchupFinder() {
  const { send, results } = useRaidBossMatchupFinder();
  const { pagination, total, currentResults } = usePager(results);
  console.log({ total, currentResults, results });
  return (
    <Container>
      <MatchupFinderInputs send={send} />
      <Results results={currentResults} pagination={pagination} total={total} />
    </Container>
  );
}
