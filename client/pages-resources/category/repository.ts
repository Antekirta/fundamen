import type { $Fetch } from 'nitropack'
import type { ProductInterface } from '@/shared/types/product.domain.interface.client'
import { Repository } from '@/shared/utils/http/Repository'

export class CategoryPageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getProductsBySearch (categoryId : string, searchParams : Partial<ProductInterface> = {}) : Promise<ProductInterface[]> {
    return this.$fetch(`/products-to-categories/category/${categoryId}`, {
      params: searchParams
    }) as Promise<ProductInterface[]>
  }
}
