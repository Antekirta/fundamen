import type { PaginationResponseInterface } from './pagination'

export interface ResponseInterface<T> {
    data: T;
    meta: {
      pagination: PaginationResponseInterface;
    };
  }
