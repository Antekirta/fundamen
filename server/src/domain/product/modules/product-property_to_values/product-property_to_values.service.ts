import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { ProductPropertyValueInterface } from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_PROPERTY_VALUES, PRODUCT_PROPERTY_TO_VALUES },
} = DB;

@Injectable()
export class ProductPropertyToValuesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getValuesByPropertyId(
    product_property_id: number,
  ): Promise<ProductPropertyValueInterface> {
    return this.knex
      .table(PRODUCT_PROPERTY_TO_VALUES)
      .where({ product_property_id })
      .join(PRODUCT_PROPERTY_VALUES, 'product_property_value_id', 'id')
      .select(`${PRODUCT_PROPERTY_VALUES}.*`);
  }

  async addValueToProperty(
    product_property_id: number,
    product_property_value_id: number,
  ): Promise<void> {
    await this.knex.table(PRODUCT_PROPERTY_TO_VALUES).insert({
      product_property_id,
      product_property_value_id,
    });
  }

  async deleteValueFromProperty(
    product_property_id: number,
    product_property_value_id: number,
  ): Promise<void> {
    await this.knex
      .table(PRODUCT_PROPERTY_TO_VALUES)
      .where({ product_property_id, product_property_value_id })
      .delete();
  }
}
