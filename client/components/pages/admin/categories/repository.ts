import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'

export class AdminCategoriesPageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getCategories () {
    return this.$fetch('/categories', {
      headers: getAuthorizationHeader()
    })
  }
}
