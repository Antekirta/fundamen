import type { SortingInterface } from '../types/sorting'
import type { PaginationRequestInterface, PaginationResponseInterface } from '@/shared/types/pagination'

const itemsPerPageDefault = 10

export const getDefaultRequestPagination = () : PaginationRequestInterface => ({
  page: 1,
  itemsPerPage: itemsPerPageDefault
})

export const getDefaultResponsePagination = () : PaginationResponseInterface => ({
  total: 0,
  itemsPerPage: itemsPerPageDefault
})

export const getDefaultSorting = () : SortingInterface => ({
  sortBy: 'id',
  sortDirection: 'asc'
})

export const updateReactiveObject = (obj: any, value: any) => {
  Object.assign(obj, value)
}

export const updateReactiveArray = (arr: any[], newArr: any[]) => {
  arr.splice(0, arr.length, ...newArr)
}
