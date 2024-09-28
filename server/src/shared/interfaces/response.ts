import { PaginationResponseInterface } from './pagination';
import { SortingInterface } from './sorting';

export interface ResponseInterface<T> {
  data: T;
  meta: {
    pagination: PaginationResponseInterface;
    sorting: SortingInterface;
  };
}
