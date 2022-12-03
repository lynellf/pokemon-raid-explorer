import usePager from "hooks/usePager";
import usePokemonDataFilters from "hooks/usePokemonDataFilters";

/**
 * To prevent the user from possibly being on a page
 * which doesn't exist, reset the active page if the
 * query state will change.
 *
 * Ideally, this sort of logic would exist within useEffect,
 * but I'd be adding control-flow logic which may create
 * annoying edge cases for a relatively minor side-effect.
 */
function resetOnChange(handleChange, setPage) {
  return ({ key, value }) => {
    setPage(1);
    handleChange({ key, value });
  };
}

export default function useFilterWithPager() {
  const { handleChange, query, results } = usePokemonDataFilters();
  const { pagination, currentResults, total } = usePager(results);

  const { setPage } = pagination;

  return {
    currentResults,
    handleChange: resetOnChange(handleChange, setPage),
    query,
    pagination,
    total
  };
}
