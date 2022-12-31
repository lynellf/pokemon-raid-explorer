import { Tabs } from "@mantine/core";
import Suggestions from "components/Suggestions";

export default function TabbedSuggestions({
  teamSuggestions = [],
  nonTeamSuggestions = []
}) {
  return (
    <Tabs defaultValue="non-team-suggestions">
      <Tabs.List>
        <Tabs.Tab value="non-team-suggestions">Suggested</Tabs.Tab>
        <Tabs.Tab value="team-suggestions">My Team</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="non-team-suggestions">
        <Suggestions data={nonTeamSuggestions} />
      </Tabs.Panel>

      <Tabs.Panel value="team-suggestions">
        <Suggestions data={teamSuggestions} />
      </Tabs.Panel>
    </Tabs>
  );
}
