import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  CategoryInterface,
  CategoryToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';
import { ProductToCategoryService } from '../product_to_category/product_to_category.service';

const {
  TABLES: { C },
} = DB;

@Injectable()
export class CategoryService {
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly productToCategoryService: ProductToCategoryService,
  ) {}

  /** GET */
  async getCategories(): Promise<CategoryInterface[]> {
    return this.knex.table(C);
  }

  async getCategoryById(id: number): Promise<CategoryInterface> {
    return this.knex
      .table(C)
      .where({ id }) as unknown as Promise<CategoryInterface>;
  }

  async getCategoryBySlug(slug: string): Promise<CategoryInterface> {
    return this.knex
      .table(C)
      .where({ slug }) as unknown as Promise<CategoryInterface>;
  }

  /** ADD */
  async addCategory(category: CategoryToAddInterface): Promise<void> {
    await this.knex.table(C).insert(category);
  }

  async addCategoriesBulk(
    categories: CategoryToAddInterface[],
  ): Promise<Array<Pick<CategoryInterface, 'id'>>> {
    const keysToReturn: Array<keyof CategoryInterface> = ['id'];

    return this.knex.table(C).returning(keysToReturn).insert(categories);
  }

  /** UPDATE */
  async updateCategory(id: number, category: CategoryInterface): Promise<void> {
    await this.knex.table(C).where({ id }).update(category);
  }

  /** DELETE */
  async deleteCategory(id: number): Promise<void> {
    await this.productToCategoryService.deleteAllProductsFromCategory(id);

    await this.knex.table(C).where({ id }).delete();
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${C} RESTART IDENTITY CASCADE`);
  }
}
