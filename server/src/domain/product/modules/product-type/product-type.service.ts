import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductTypeInterface,
  ProductTypeToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_TYPES },
} = DB;

@Injectable()
export class ProductTypeService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

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

  async clearTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_TYPES} RESTART IDENTITY CASCADE`,
    );
  }
}
