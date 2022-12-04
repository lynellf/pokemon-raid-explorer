const getLabel = (label, upper, lower) => (query) => {
  return query >= lower && query <= upper ? label : false;
};

const byTruthyValue = (value) => (testFn) => testFn(value);

/**
 * @description provides tier-list ranking on a 0 - 100 scale,
 * based on the numeric input provided (ie. 85 is "B")
 * @param {number} query numeric query
 * @returns {"S"|"A"|"B"|"C"|"D"} tier ranking
 */
export default function getTier(query) {
  const S = getLabel("S", Infinity, 99);
  const A = getLabel("A", 98, 90);
  const B = getLabel("B", 89, 80);
  const C = getLabel("C", 79, 70);
  const D = getLabel("D", 69, -Infinity);

  const roundedQuery = Math.round(query);

  const applyTier = [S, A, B, C, D].find(byTruthyValue(roundedQuery));

  return applyTier(roundedQuery);
}
