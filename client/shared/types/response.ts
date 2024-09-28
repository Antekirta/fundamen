import type { PaginationResponseInterface } from './pagination'
import type { SortingInterface } from './sorting'

export interface ResponseInterface<T> {
    data: T;
    meta: {
      pagination: PaginationResponseInterface;
      sorting: SortingInterface
    };
  }
