import { usePagination } from "@mantine/hooks";
import chunkArr from "utils/chunkArr";

const PAGINATION_PER_PAGE_DEFAULT = 10;
export default function usePager(data = []) {
  const pages = chunkArr(data, PAGINATION_PER_PAGE_DEFAULT);
  const total = pages.length;

  // use-pagniation api
  // https://mantine.dev/hooks/use-pagination/
  const pagination = usePagination({ total });
  // "active" means current page
  const { active } = pagination;
  /**
   * @type {import('data/pokemon-results-list')['default']}
   * page count starts at one and not zero
   */
  const currentResults = pages[active - 1] ?? [];

  return { pagination, currentResults, total };
}
