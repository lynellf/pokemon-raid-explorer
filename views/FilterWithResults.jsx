import { Container } from "@mantine/core";
import Filters from "components/Filters";
import Results from "components/Results";
import useFilterWithPager from "hooks/useFilterWithPager";

export default function FilterWithResults() {
  const { currentResults, query, handleChange, pagination, total } =
    useFilterWithPager();

  return (
    <Container>
      <Filters query={query} handleChange={handleChange} />
      <Results results={currentResults} pagination={pagination} total={total} />
    </Container>
  );
}
