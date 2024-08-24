import { getRandom } from '../../utils/number';

export class PropertyToProductTypeBuilder {
  isInit = false;
  productTypesIds: number[];
  productPropertiesNames: string[];

  init(productTypesIds: number[], productPropertiesNames: string[]) {
    this.productTypesIds = productTypesIds;
    this.productPropertiesNames = productPropertiesNames;

    this.isInit = true;
  }

  build() {
    if (!this.isInit) {
      throw new Error('PropertyToProductTypeBuilder not initialized');
    }

    return this.productPropertiesNames.map((productPropertiesName) => {
      return {
        product_type_id:
          this.productTypesIds[getRandom(0, this.productTypesIds.length - 1)],
        product_property_name: productPropertiesName,
      };
    });
  }
}
