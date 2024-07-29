import type { $Fetch } from 'nitropack'
import type { CategoryInterface } from '@/shared/types/product.domain.interface.client'
import { Repository } from '@/shared/utils/http/Repository'

export class IndexPageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getCategories () : Promise<CategoryInterface[]> {
    return this.$fetch('/categories') as Promise<CategoryInterface[]>
  }
}
