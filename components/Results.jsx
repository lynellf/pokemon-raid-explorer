import styled from "styled-components";
import { Table, List, Container, Pagination } from "@mantine/core";
import PaddedTitle from "components/PaddedTitle";

const FlexList = styled(List)`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`;

const BorderedBox = styled(Container)`
  border-top: thin solid black;
`;

const PagerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * @typedef {Object} ResultsProps
 * @property {ReturnType<typeof import('hooks/usePokemonDataFilters')['default']>['results']} ResultsProps.results
 * @param {ResultsProps} { results }
 */
export default function Results({ results, pagination, total }) {
  const { active, setPage } = pagination;
  const hasNoResults = results.length === 0;

  if (hasNoResults) {
    return (
      <div>
        <PaddedTitle>No Results</PaddedTitle>
      </div>
    );
  }

  return (
    <div>
      {results.map((data, i) => (
        <BorderedBox key={`${data.name}_${i}`}>
          <div>
            <PaddedTitle order={3}>{data.name}</PaddedTitle>
            <FlexList listStyleType={"none"}>
              {data.types.map((type) => (
                <FlexList.Item key={type}>
                  <strong>{type}</strong>
                </FlexList.Item>
              ))}
            </FlexList>
          </div>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Base HP</th>
                  <th>Base ATK</th>
                  <th>Base DEF</th>
                  <th>Base SPA</th>
                  <th>Base SPD</th>
                  <th>Base Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.entries(data.baseStats).map(([label, value]) => (
                    <td key={label}>{value}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th>HP Quantile</th>
                  <th>ATK Quantile</th>
                  <th>DEF Quantile</th>
                  <th>SPA Quantile</th>
                  <th>SPD Quantile</th>
                  <th>Speed Quantile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.entries(data.quantiles).map(([label, value]) => (
                    <td key={label}>{value.toFixed(2)}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              <strong>Types Resisted: </strong>
            </p>
            <FlexList listStyleType={"none"}>
              {data.resistances.map((type) => (
                <FlexList.Item key={type}>{type}</FlexList.Item>
              ))}
            </FlexList>
          </div>
          <div>
            <p>
              <strong>Types Weak Against: </strong>
            </p>
            <FlexList listStyleType={"none"}>
              {data.weaknesses.map((type) => (
                <FlexList.Item key={type}>{type}</FlexList.Item>
              ))}
            </FlexList>
          </div>
          {data.suggestedMoves.length && (
            <div>
              <p>
                <strong>Suggested Moves: </strong>
              </p>
              <FlexList listStyleType={"none"}>
                {data.suggestedMoves.map((move) => (
                  <FlexList.Item key={move}>{move}</FlexList.Item>
                ))}
              </FlexList>
            </div>
          )}
        </BorderedBox>
      ))}
      <PagerContainer>
        <Pagination page={active} total={total} onChange={setPage} />
      </PagerContainer>
    </div>
  );
}
