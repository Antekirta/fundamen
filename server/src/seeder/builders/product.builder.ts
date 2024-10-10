import { getRandom } from '../../shared/utils/number';
import { NUMBER_OF_PRODUCTS } from '../settings';
import {
  ProductPropertyInterface,
  ProductToAddInterface,
} from '../../domain/product/product.domain.interface';

export class ProductBuilder {
  productTypesIds: number[];
  propertiesValuesIds: number[];

  init(productTypesIds: number[], propertiesValuesIds: number[]) {
    this.productTypesIds = productTypesIds;
    this.propertiesValuesIds = propertiesValuesIds;
  }

  build() {
    const products = Array.from(new Array(NUMBER_OF_PRODUCTS)).map((_, i) => {
      return {
        name: `Seeded product ${i + 1}`,
        description: `Seeded description ${i + 1}`,
        price: getRandom(100, 1000),
        stock_quantity: getRandom(1, 100),
        images_urls: [],
        primary_image_url: '',
        is_active: true,
        product_type:
          this.productTypesIds[getRandom(0, this.productTypesIds.length - 1)],
      } as ProductToAddInterface;
    });

    return products;
  }

  buildProductsProperties(productProperties: ProductPropertyInterface[]) {
    return productProperties.reduce((acc, { name, has_predefined_values }) => {
      return {
        ...acc,
        [name]: has_predefined_values
          ? this.propertiesValuesIds[
              getRandom(0, this.propertiesValuesIds.length - 1)
            ]
          : `${Math.random()}`, // some random string
      };
    }, {});
  }
}
