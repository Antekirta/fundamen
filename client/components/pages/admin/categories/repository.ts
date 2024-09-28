import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'
import type { PaginationRequestInterface } from '@/shared/types/pagination'
import { getDefaultRequestPagination, getDefaultSorting } from '@/shared/utils/helpers'
import type { ResponseInterface } from '@/shared/types/response'
import type { SortingInterface } from '@/shared/types/sorting'

interface RequstOptionsInterface {
  pagination: PaginationRequestInterface
  sorting: SortingInterface
}

export class AdminCategoriesPageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getCategories ({
    pagination,
    sorting
  } : RequstOptionsInterface) : Promise<ResponseInterface<any>> {
    console.log('pagination || getDefaultRequestPagination(): ', pagination || getDefaultRequestPagination())
    console.log('(sorting || getDefaultSorting()): ', (sorting || getDefaultSorting()))

    return this.$fetch('/categories', {
      params: {
        ...(pagination || getDefaultRequestPagination()),
        ...(sorting || getDefaultSorting())
      },
      headers: getAuthorizationHeader()
    })
  }
}
