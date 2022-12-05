import { Tabs, Container } from "@mantine/core";
import FilterWithResults from "views/FilterWithResults";
import MatchupFinder from "views/MatchupFinder";
export default function Landing() {
  return (
    <Container>
      <Tabs defaultValue="matchups">
        <Tabs.List>
          <Tabs.Tab value="matchups">Matchups</Tabs.Tab>
          <Tabs.Tab value="explorer">Explorer</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="matchups">
          <MatchupFinder />
        </Tabs.Panel>
        <Tabs.Panel value="explorer">
          <FilterWithResults />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
