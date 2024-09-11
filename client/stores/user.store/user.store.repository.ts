import type { $Fetch } from 'nitropack'
import type { UserSecureInterface } from '@/shared/types/user.interface.domain.client'
import { Repository } from '@/shared/utils/http/Repository'

export class UserStoreRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getProductsBySearch (categoryId : string, searchParams : Partial<UserSecureInterface> = {}) : Promise<UserSecureInterface[]> {
    return this.$fetch(`/products-to-categories/category/${categoryId}`, {
      params: searchParams
    }) as Promise<UserSecureInterface[]>
  }
}
