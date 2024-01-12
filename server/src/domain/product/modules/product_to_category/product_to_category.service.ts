import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductInterface,
  ProductsToCategoriesInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: { P, PTC },
} = DB;

@Injectable()
export class ProductToCategoryService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getProductsFromCategory(
    categoryId: number,
    searchParams?: Partial<ProductInterface>,
  ): Promise<any> {
    const response = this.knex
      .select('*')
      .from(function () {
        this.select('*')
          .from(PTC)
          .where('category_id', categoryId)
          .as('filtered_ptc');
      })
      .innerJoin(P, 'filtered_ptc.product_id', `${P}.id`);

    if (searchParams) {
      return response.where({ ...searchParams });
    }

    return response;
  }

  async addProductToCategory(categoryId: number, productId: number) {
    await this.knex.table(PTC).insert({
      category_id: categoryId,
      product_id: productId,
    } as ProductsToCategoriesInterface);
  }

  async deleteProductFromCategory(categoryId: number, productId: number) {
    await this.knex
      .table(PTC)
      .where({
        category_id: categoryId,
        product_id: productId,
      } as ProductsToCategoriesInterface)
      .delete();
  }

  async deleteProductFromAllCategories(productId: number) {
    await this.knex
      .table(PTC)
      .where({
        product_id: productId,
      } as ProductsToCategoriesInterface)
      .delete();
  }

  async deleteAllProductsFromCategory(categoryId: number) {
    await this.knex
      .table(PTC)
      .where({
        category_id: categoryId,
      } as ProductsToCategoriesInterface)
      .delete();
  }
}
