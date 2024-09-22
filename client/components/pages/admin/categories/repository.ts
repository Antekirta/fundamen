import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'
import type { PaginationRequestInterface } from '@/shared/types/pagination'
import { getDefaultRequestPagination } from '@/shared/utils/helpers'
import type { ResponseInterface } from '@/shared/types/response'

export class AdminCategoriesPageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getCategories (pagination?: PaginationRequestInterface) : Promise<ResponseInterface<any>> {
    return this.$fetch('/categories', {
      params: {
        ...(pagination || getDefaultRequestPagination())
      },
      headers: getAuthorizationHeader()
    })
  }
}
