import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import type { CategoryInterface } from '@/shared/types/domain/category'

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
