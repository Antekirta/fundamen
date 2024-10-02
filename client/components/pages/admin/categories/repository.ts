import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'
import type { PaginationRequestInterface } from '@/shared/types/pagination'
import { getDefaultRequestPagination, getDefaultSorting } from '@/shared/utils/helpers'
import type { ResponseInterface } from '@/shared/types/response'
import type { SortingInterface } from '@/shared/types/sorting'
import type { CategoryInterface } from '@/shared/types/domain/category'

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

  createCategory (
    category : Omit<CategoryInterface, 'id' | 'primary_image_url'>,
    file : File
  ) {
    const formData = new FormData()

    formData.append('category', JSON.stringify(category))
    formData.append('file', file)

    return this.$fetch('/categories', {
      method: 'POST',
      headers: getAuthorizationHeader(),
      body: formData
    })
  }
}
