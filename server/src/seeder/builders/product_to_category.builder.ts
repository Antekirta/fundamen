import { getRandom } from '../../shared/utils/number';

export class ProductToCategoryBuilder {
  productsIds: number[];
  categoriesIds: number[];

  init(productsIds: number[], categoriesIds: number[]) {
    this.productsIds = productsIds;
    this.categoriesIds = categoriesIds;
  }

  build() {
    return [
      {
        productId: this.productsIds[0],
        categoryId: 1,
      },
      ...this.productsIds.slice(1).map((productId) => {
        return {
          productId,
          categoryId:
            this.categoriesIds[getRandom(0, this.categoriesIds.length - 1)],
        };
      }),
    ];
  }
}
