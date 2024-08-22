import { Injectable } from '@nestjs/common';
import {
  ProductPropertyInterface,
  ProductPropertyToAddInterface,
  ProductPropertyValueInterface,
  ProductPropertyValueToAddInterface,
  ProductTypeInterface,
  ProductTypeToAddInterface,
} from '../../product.domain.interface';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

import { DB } from '../../product.domain.registry';

const {
  TABLES: {
    PRODUCT_TYPES,
    PRODUCT_PROPERTIES,
    PRODUCT_PROPERTY_VALUES,
    PRODUCT_TYPE_TO_PROPERTIES,
    PRODUCT_PROPERTY_TO_VALUES,
    PRODUCT_TO_PROPERTY_TO_VALUE,
  },
} = DB;

@Injectable()
export class ProductDescriptionService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  /** PRODUCT TYPE */

  /** PRODUCT PROPERTY */
  async getProductPropertiesByProductTypeId(
    product_type_id: number,
  ): Promise<ProductPropertyInterface> {
    return this.knex
      .table(PRODUCT_TYPE_TO_PROPERTIES)
      .where({ product_type_id })
      .join(PRODUCT_PROPERTIES, 'product_property_name', 'name');
  }

  async getProductPropertiesByProductId(
    product_id: number,
  ): Promise<ProductPropertyInterface> {
    return this.knex
      .table(PRODUCT_PROPERTY_TO_VALUES)
      .where({ product_id })
      .join(PRODUCT_PROPERTIES, 'product_property_name', 'name');
  }

  /** PRODUCT PROPERTY VALUE */

  /** PRODUCT PROPERTY TO PRODUCT TYPE */
  async addPropertiesToProductTypes(
    product_type_id: number,
    product_property_name: string,
  ): Promise<void> {
    await this.knex.table(PRODUCT_TYPE_TO_PROPERTIES).insert({
      product_type_id,
      product_property_name,
    });
  }

  async clearPropertiesToProductTypesTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_TYPE_TO_PROPERTIES} RESTART IDENTITY CASCADE`,
    );
  }

  /** PRODUCT VALUE TO PROPERTY */

  /** VALUES OF THE PROPERTIES TO PRODUCT */
}
