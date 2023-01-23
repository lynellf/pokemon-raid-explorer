import styled from "styled-components";
import { Table, List, Container, Pagination } from "@mantine/core";
import PaddedTitle from "components/PaddedTitle";
import usePager from "hooks/usePager";
import getTier from "utils/getTier";

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
 * @description By default, screen readers will fail to recognize some buttons within Mantine's
 * pagination component. This callback looks up and returns the appropriate aria label
 * for each page item.
 *
 * references:
 * https://mantine.dev/core/pagination/#accessibility
 * https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI
 *
 * @param {string} page pagination item context or page number
 */
const setAriaLabelsForPageBtns = (page) => {
  return (
    {
      dots: "ellipsis item",
      prev: "previous page button",
      next: "next page button",
      first: "first page button",
      last: "last page button"
    }[page] ?? `page ${page} button`
  );
};

/**
 * @typedef {Object} ResultsProps
 * @property {any[]} ResultsProps.results
 * @param {ResultsProps} { results }
 */
export default function Suggestions({ data = [] }) {
  const { pagination, currentResults, total } = usePager(data);
  const { active, setPage } = pagination;
  const hasNoResults = currentResults.length === 0;

  if (hasNoResults) {
    return (
      <div>
        <PaddedTitle>No Results</PaddedTitle>
      </div>
    );
  }

  return (
    <div>
      {currentResults.map((data, i) => (
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
                    <td key={label}>
                      {value}
                      <sup>
                        {" "}
                        <strong>
                          {getTier(data.quantiles[label] * 100)}-Tier
                        </strong>
                      </sup>
                    </td>
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
          {data.suggestedMoves.length > 0 && (
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
        <Pagination
          page={active}
          total={total}
          onChange={setPage}
          getItemAriaLabel={setAriaLabelsForPageBtns}
        />
      </PagerContainer>
    </div>
  );
}
