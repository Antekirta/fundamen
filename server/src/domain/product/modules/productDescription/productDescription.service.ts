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
    PRODUCT_PROPERTY_TO_VALUE,
    PRODUCT_TO_PROPERTY_TO_VALUE,
  },
} = DB;

@Injectable()
export class ProductDescriptionService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  /** PRODUCT TYPE */
  async getProductTypes(): Promise<ProductTypeInterface> {
    return this.knex.table(PRODUCT_TYPES);
  }

  async addProductTypes(
    productType: ProductTypeToAddInterface[],
  ): Promise<Array<Pick<ProductTypeInterface, 'id'>>> {
    const keysToReturn: Array<keyof ProductTypeInterface> = ['id'];

    return (await this.knex
      .table(PRODUCT_TYPES)
      .returning(keysToReturn)
      .insert(productType)) as unknown as Array<
      Pick<ProductTypeInterface, 'id'>
    >;
  }

  async updateProductType(
    id: number,
    productType: ProductTypeToAddInterface,
  ): Promise<void> {
    await this.knex.table(PRODUCT_TYPES).where({ id }).update(productType);
  }

  async deleteProductType(id: number): Promise<void> {
    await this.knex.table(PRODUCT_TYPES).where({ id }).del();
  }

  async clearProductTypesTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_TYPES} RESTART IDENTITY CASCADE`,
    );
  }

  /** PRODUCT PROPERTY */
  async getProductProperties(): Promise<ProductPropertyInterface> {
    return this.knex.table(PRODUCT_PROPERTIES);
  }

  async getProductPropertiesByProductTypeId(
    product_type_id: number,
  ): Promise<ProductPropertyInterface> {
    return this.knex
      .table(PRODUCT_TYPE_TO_PROPERTIES)
      .where({ product_type_id })
      .join(PRODUCT_PROPERTIES, 'product_property_id', 'id');
  }

  async getProductPropertiesByProductId(
    product_id: number,
  ): Promise<ProductPropertyInterface> {
    return this.knex
      .table(PRODUCT_PROPERTY_TO_VALUE)
      .where({ product_id })
      .join(PRODUCT_PROPERTIES, 'product_property_id', 'id');
  }

  async addProductProperties(
    productProperty: ProductPropertyToAddInterface[],
  ): Promise<Array<Pick<ProductPropertyInterface, 'id'>>> {
    const keysToReturn: Array<keyof ProductPropertyInterface> = ['id'];

    return (await this.knex
      .table(PRODUCT_PROPERTIES)
      .returning(keysToReturn)
      .insert(productProperty)) as unknown as Array<
      Pick<ProductPropertyInterface, 'id'>
    >;
  }

  async updateProductProperty(
    id: number,
    productProperty: ProductPropertyToAddInterface,
  ): Promise<void> {
    await this.knex
      .table(PRODUCT_PROPERTIES)
      .where({ id })
      .update(productProperty);
  }

  async deleteProductProperty(id: number): Promise<void> {
    await this.knex.table(PRODUCT_PROPERTIES).where({ id }).del();
  }

  async clearProductPropertiesTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_PROPERTIES} RESTART IDENTITY CASCADE`,
    );
  }

  /** PRODUCT PROPERTY VALUE */
  async getProductPropertyValues(): Promise<ProductPropertyInterface> {
    return this.knex.table(PRODUCT_PROPERTY_VALUES);
  }

  async addProductPropertyValues(
    productProperty: ProductPropertyValueToAddInterface[],
  ): Promise<Array<Pick<ProductPropertyValueInterface, 'id'>>> {
    const keysToReturn: Array<keyof ProductPropertyValueInterface> = ['id'];

    return (await this.knex
      .table(PRODUCT_PROPERTY_VALUES)
      .returning(keysToReturn)
      .insert(productProperty)) as unknown as Array<
      Pick<ProductPropertyValueInterface, 'id'>
    >;
  }

  async updateProductPropertyValue(
    id: number,
    productProperty: ProductPropertyToAddInterface,
  ): Promise<void> {
    await this.knex
      .table(PRODUCT_PROPERTY_VALUES)
      .where({ id })
      .update(productProperty);
  }

  async deleteProductPropertyValue(id: number): Promise<void> {
    await this.knex.table(PRODUCT_PROPERTY_VALUES).where({ id }).del();
  }

  async clearProductPropertyValuesTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_PROPERTY_VALUES} RESTART IDENTITY CASCADE`,
    );
  }

  /** PRODUCT PROPERTY TO PRODUCT */

  /** PRODUCT VALUE TO PROPERTY */
}
