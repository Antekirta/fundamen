import { ProductPropertyValueToAddInterface } from '../../domain/product/product.domain.interface';
import { NUMBER_OF_PRODUCT_PROPERTIES_VALUES } from '../settings';

export class ProductPropertiesValuesBuilder {
  build() {
    const productPropertiesValues: ProductPropertyValueToAddInterface[] =
      Array.from(new Array(NUMBER_OF_PRODUCT_PROPERTIES_VALUES)).map((_, i) => {
        return {
          value: `Value ${i + 1}`,
        };
      });

    return productPropertiesValues;
  }
}
