import type { PaginationResponseInterface } from '@/shared/types/pagination'
import { getDefaultResponsePagination, updateReactiveObject } from '@/shared/utils/helpers'

export const usePagination = () => {
  const paginationRes = reactive<PaginationResponseInterface>(getDefaultResponsePagination())

  const updatePaginationRes = (pagination: PaginationResponseInterface) => {
    updateReactiveObject(paginationRes, pagination)
  }

  return {
    paginationRes,

    updatePaginationRes
  }
}
