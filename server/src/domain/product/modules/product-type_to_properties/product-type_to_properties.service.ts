import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductPropertyInterface,
  ProductTypeToPropertyInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_PROPERTIES, PRODUCT_TYPE_TO_PROPERTIES },
} = DB;

@Injectable()
export class ProductTypeToPropertiesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getPropertiesByProductTypeId(
    product_type_id: number,
  ): Promise<ProductPropertyInterface[]> {
    return this.knex
      .table(PRODUCT_TYPE_TO_PROPERTIES)
      .where({ product_type_id })
      .join(
        PRODUCT_PROPERTIES,
        'product_property_name',
        `${PRODUCT_PROPERTIES}.name`,
      )
      .select(`${PRODUCT_PROPERTIES}.*`);
  }

  async addPropertiesToProductType(rows: ProductTypeToPropertyInterface[]) {
    return this.knex.table(PRODUCT_TYPE_TO_PROPERTIES).insert(rows);
  }

  async deletePropertyFromProductType(
    product_type_id: number,
    product_property_name: string,
  ) {
    return this.knex
      .table(PRODUCT_TYPE_TO_PROPERTIES)
      .where({ product_type_id, product_property_name })
      .delete();
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_TYPE_TO_PROPERTIES} RESTART IDENTITY CASCADE`,
    );
  }
}
