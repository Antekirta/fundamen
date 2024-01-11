import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductInterface,
  ProductsToCategoriesInterface,
  ProductToAddInterface,
} from './product.interface';

const TABLES = {
  PRODUCTS: 'products',
  PRODUCTS_TO_CATEGORIES: 'product_to_categories',
};

@Injectable()
export class ProductService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getProductById(id: number): Promise<ProductInterface> {
    return this.knex.table(TABLES.PRODUCTS).where({
      id,
    } as Partial<ProductInterface>) as unknown as Promise<ProductInterface>;
  }

  async getProducts(
    searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return this.knex.table(TABLES.PRODUCTS).where({
      ...searchParams,
    });
  }

  async getProductsFromCategory(
    categoryId: number,
    searchParams?: Partial<ProductInterface>,
  ): Promise<any> {
    const response = this.knex
      .select('*')
      .from(function () {
        this.select('*')
          .from(TABLES.PRODUCTS_TO_CATEGORIES)
          .where('category_id', categoryId)
          .as('filtered_ptc');
      })
      .innerJoin(`${TABLES.PRODUCTS} as p`, 'filtered_ptc.product_id', 'p.id');

    if (searchParams) {
      return response.where({ ...searchParams });
    }

    return response;
  }

  async addProduct(product: ProductToAddInterface): Promise<void> {
    await this.knex.table(TABLES.PRODUCTS).insert(product);
  }

  async updateProduct(
    id: number,
    product: Partial<ProductToAddInterface>,
  ): Promise<void> {
    await this.knex.table(TABLES.PRODUCTS).where({ id }).update(product);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.knex.table(TABLES.PRODUCTS).where({ id }).delete();
  }

  async addProductToCategory(categoryId: number, productId: number) {
    await this.knex.table(TABLES.PRODUCTS_TO_CATEGORIES).insert({
      category_id: categoryId,
      product_id: productId,
    } as ProductsToCategoriesInterface);
  }

  async deleteProductFromCategory(categoryId: number, productId: number) {
    await this.knex
      .table(TABLES.PRODUCTS_TO_CATEGORIES)
      .where({
        category_id: categoryId,
        product_id: productId,
      } as ProductsToCategoriesInterface)
      .delete();
  }

  async deleteProductFromAllCategories(productId: number) {
    await this.knex
      .table(TABLES.PRODUCTS_TO_CATEGORIES)
      .where({
        product_id: productId,
      } as ProductsToCategoriesInterface)
      .delete();
  }
}
