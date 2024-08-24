import { ProductPropertyToAddInterface } from '../../domain/product/product.domain.interface';
import { NUMBER_OF_PRODUCT_PROPERTIES } from '../settings';

export class ProductPropertyBuilder {
  build() {
    const productProperties: ProductPropertyToAddInterface[] = Array.from(
      new Array(NUMBER_OF_PRODUCT_PROPERTIES),
    ).map((_, i) => {
      return {
        name: `property_${i + 1}`,
        title: `Seeded product property ${i + 1}`,
        description: `Seeded product property description ${i + 1}`,
        has_predefined_values: true,
      };
    });

    return productProperties;
  }
}
