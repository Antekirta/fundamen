import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { ProductPropertyInterface } from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_PROPERTIES, PRODUCT_TYPE_TO_PROPERTIES },
} = DB;

@Injectable()
export class ProductTypeToPropertiesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getPropertiesByProductTypeId(
    product_type_id: number,
  ): Promise<ProductPropertyInterface> {
    return this.knex
      .table(PRODUCT_TYPE_TO_PROPERTIES)
      .where({ product_type_id })
      .join(
        PRODUCT_PROPERTIES,
        'product_property_id',
        `${PRODUCT_PROPERTIES}.id`,
      )
      .select(`${PRODUCT_PROPERTIES}.*`);
  }

  async addPropertyToProductType(
    product_type_id: number,
    product_property_id: number,
  ) {
    return this.knex.table(PRODUCT_TYPE_TO_PROPERTIES).insert({
      product_type_id,
      product_property_id,
    });
  }

  async deletePropertyFromProductType(
    product_type_id: number,
    product_property_id: number,
  ) {
    return this.knex
      .table(PRODUCT_TYPE_TO_PROPERTIES)
      .where({ product_type_id, product_property_id })
      .delete();
  }
}
