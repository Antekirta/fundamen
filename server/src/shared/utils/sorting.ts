import { SortingInterface } from '../interfaces/sorting';

export const getSorting = (
  sorting: Partial<SortingInterface>,
): SortingInterface => {
  return {
    sortBy: 'id',
    sortDirection: 'desc',
    ...sorting,
  };
};
