import { ProductTypeToAddInterface } from '../../domain/product/product.domain.interface';
import { NUMBER_OF_PRODUCT_TYPES } from '../settings';

export class ProductTypeBuilder {
  build() {
    const productTypes: ProductTypeToAddInterface[] = Array.from(
      new Array(NUMBER_OF_PRODUCT_TYPES),
    ).map((_, i) => {
      return {
        name: `Seeded product type ${i + 1}`,
      };
    });

    return productTypes;
  }
}
