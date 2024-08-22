import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductPropertyInterface,
  ProductPropertyToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { PRODUCT_PROPERTIES },
} = DB;

@Injectable()
export class ProductPropertyService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getProductProperties(
    propertiesNames: string[],
  ): Promise<ProductPropertyInterface[]> {
    return this.knex.table(PRODUCT_PROPERTIES).whereIn('name', propertiesNames);
  }

  async addProductProperties(
    productProperty: ProductPropertyToAddInterface[],
  ): Promise<Array<Pick<ProductPropertyInterface, 'name'>>> {
    const keysToReturn: Array<keyof ProductPropertyInterface> = ['name'];

    return (await this.knex
      .table(PRODUCT_PROPERTIES)
      .returning(keysToReturn)
      .insert(productProperty)) as unknown as Array<
      Pick<ProductPropertyInterface, 'name'>
    >;
  }

  async updateProductProperty(
    name: string,
    productProperty: ProductPropertyToAddInterface,
  ): Promise<void> {
    await this.knex
      .table(PRODUCT_PROPERTIES)
      .where({ name })
      .update(productProperty);
  }

  async deleteProductProperty(name: string): Promise<void> {
    await this.knex.table(PRODUCT_PROPERTIES).where({ name }).del();
  }

  async clearProductPropertiesTable(): Promise<void> {
    await this.knex.raw(
      `TRUNCATE TABLE ${PRODUCT_PROPERTIES} RESTART IDENTITY CASCADE`,
    );
  }
}
