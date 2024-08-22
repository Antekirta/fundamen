import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductPropertyToValueInterface,
  ProductPropertyValueInterface,
  ProductPropertyValueToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_PROPERTY_VALUES, PRODUCT_PROPERTY_TO_VALUES },
} = DB;

@Injectable()
export class ProductPropertyToValuesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getValuesByPropertyId(
    product_property_name: string,
  ): Promise<ProductPropertyValueInterface> {
    return this.knex
      .table(PRODUCT_PROPERTY_TO_VALUES)
      .where({ product_property_name })
      .join(PRODUCT_PROPERTY_VALUES, 'product_property_value_id', 'id')
      .select(`${PRODUCT_PROPERTY_VALUES}.*`);
  }

  async addValuesToProperties(
    rows: ProductPropertyToValueInterface[],
  ): Promise<void> {
    await this.knex.table(PRODUCT_PROPERTY_TO_VALUES).insert(rows);
  }

  async deleteValueFromProperty(
    product_property_name: string,
    product_property_value_id: number,
  ): Promise<void> {
    await this.knex
      .table(PRODUCT_PROPERTY_TO_VALUES)
      .where({ product_property_name, product_property_value_id })
      .delete();
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_PROPERTY_TO_VALUES} RESTART IDENTITY CASCADE`,
    );
  }
}
