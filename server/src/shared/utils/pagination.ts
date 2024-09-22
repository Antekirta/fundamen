import { PaginationResponseInterface } from '../interfaces/pagination';

export const getPagination = (
  pagination: Partial<PaginationResponseInterface>,
): PaginationResponseInterface => {
  return {
    itemsPerPage: 10,
    total: 0,
    ...pagination,
  };
};
