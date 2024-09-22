import { getRandom } from '../../shared/utils/number';

export class PropertiesValuesToProductPropertiesBuilder {
  productPropertiesNames: string[];
  propertiesValuesIds: number[];

  init(productPropertiesNames: string[], propertiesValuesIds: number[]) {
    this.productPropertiesNames = productPropertiesNames;
    this.propertiesValuesIds = propertiesValuesIds;
  }

  build() {
    return this.propertiesValuesIds.map((propertyValueId) => {
      return {
        product_property_name:
          this.productPropertiesNames[
            getRandom(0, this.productPropertiesNames.length - 1)
          ],
        product_property_value_id: propertyValueId,
      };
    });
  }
}
