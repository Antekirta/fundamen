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
