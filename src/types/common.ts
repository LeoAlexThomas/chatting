export interface PaginationInterface<T> {
  data: T[];
  currentPageNumber: number;
  currentPageSize: number;
  totalPages: number;
  totalSize: number;
}
