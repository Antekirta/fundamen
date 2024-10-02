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
  static instance : any
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  static create ($fetch : $Fetch) : AdminCategoriesPageRepository {
    if (AdminCategoriesPageRepository.instance) {
      return AdminCategoriesPageRepository.instance
    }

    AdminCategoriesPageRepository.instance = new AdminCategoriesPageRepository($fetch)

    return AdminCategoriesPageRepository.instance
  }

  getCategories ({
    pagination,
    sorting
  } : RequstOptionsInterface) : Promise<ResponseInterface<any>> {
    return this.$fetch('/categories', {
      params: {
        ...(pagination || getDefaultRequestPagination()),
        ...(sorting || getDefaultSorting())
      },
      headers: getAuthorizationHeader()
    })
  }
}
