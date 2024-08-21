import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductPropertyInterface,
  ProductPropertyToAddInterface,
  ProductPropertyValueInterface,
  ProductPropertyValueToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_PROPERTY_VALUES },
} = DB;

@Injectable()
export class ProductPropertyValueService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

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
}
