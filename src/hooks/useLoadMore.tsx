import api from "@/api";
import { PaginationInterface } from "@/types/common";
import useSWRInfinite, { SWRInfiniteResponse } from "swr/infinite";

function useLoadMore<T>({
  getUrl,
}: {
  getUrl: (pageNumber: number) => string;
}) {
  const { data, error, mutate, size, setSize } = useSWRInfinite<
    PaginationInterface<T>
  >((index: number, previousData: PaginationInterface<T> | null) => {
    if (previousData && !previousData.data) {
      return null;
    }

    return getUrl(index + 1);
  }, api);

  const isDataInitialLoading = !data && !error;

  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === "undefined";
  const lastData = data && data[data.length - 1];

  const showLoadMore =
    size > 0 && lastData && lastData.currentPageNumber < lastData.totalPages;

  const onLoadMore = () => {
    if (!showLoadMore) {
      return;
    }
    setSize((pageSize: number) => pageSize + 1);
  };

  return {
    data,
    error,
    isLoadingMore,
    isDataInitialLoading,
    mutate,
    size,
    onLoadMore,
    showLoadMore,
  };
}

export default useLoadMore;
