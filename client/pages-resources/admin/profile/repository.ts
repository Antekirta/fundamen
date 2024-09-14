import type { $Fetch } from 'nitropack'
import type { ProductInterface } from '@/shared/types/product.domain.interface.client'
import { Repository } from '@/shared/utils/http/Repository'

export class AdminProfilePageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getUserInfo (userId : number) : Promise<ProductInterface[]> {
    return this.$fetch(`/users/id/${userId}`)
  }
}
