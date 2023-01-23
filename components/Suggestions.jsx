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
 *
 * @param {HTMLDivElement} rootEl
 */
const setAriaRolesForPager = (labelBack, labelForward) => (rootEl) => {
  const children = [...(rootEl?.children ?? [])];
  const backBtn = children?.at(0);
  // array.prototype.at(-1) selects the last item
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
  const forwardBtn = children?.at(-1);
  const ellipsisBtn = rootEl?.querySelector('button[data-dots="true"]');

  if (backBtn) {
    backBtn.setAttribute("aria-label", labelBack);
  }

  if (forwardBtn) {
    forwardBtn.setAttribute("aria-label", labelForward);
  }

  if (ellipsisBtn) {
    ellipsisBtn.setAttribute("aria-label", "ellipsis");
  }
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
          ref={setAriaRolesForPager("previous page", "next page")}
        />
      </PagerContainer>
    </div>
  );
}
