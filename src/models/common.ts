export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListRepsonse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page: number;
  _limit: number;
  _sort: string;
  _order: 'asc' | 'desc';

  [key: string]: any;
}
