import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { ProductInterface, ProductToAddInterface } from './product.interface';

const DB = {
  TABLE_NAME: 'products',
};

@Injectable()
export class ProductService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getProductById(id: number): Promise<ProductInterface> {
    return this.knex.table(DB.TABLE_NAME).where({
      id,
    } as Partial<ProductInterface>) as unknown as Promise<ProductInterface>;
  }

  async getProducts(
    searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return this.knex.table(DB.TABLE_NAME).where({
      ...searchParams,
    });
  }

  async addProduct(product: ProductToAddInterface): Promise<void> {
    await this.knex.table(DB.TABLE_NAME).insert(product);
  }

  async updateProduct(
    id: number,
    product: Partial<ProductToAddInterface>,
  ): Promise<void> {
    await this.knex.table(DB.TABLE_NAME).where({ id }).update(product);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.knex.table(DB.TABLE_NAME).where({ id }).delete();
  }
}
