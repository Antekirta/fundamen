import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  CategoryInterface,
  CategoryToAddInterface,
} from './category.interface';

const DB = {
  TABLE_NAME: 'categories',
};

@Injectable()
export class CategoryService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getCategories(): Promise<CategoryInterface[]> {
    return this.knex.table(DB.TABLE_NAME);
  }

  async getCategoryById(id: number): Promise<CategoryInterface> {
    return this.knex
      .table(DB.TABLE_NAME)
      .where({ id }) as unknown as Promise<CategoryInterface>;
  }

  async getCategoryBySlug(slug: string): Promise<CategoryInterface> {
    return this.knex
      .table(DB.TABLE_NAME)
      .where({ slug }) as unknown as Promise<CategoryInterface>;
  }

  async addCategory(category: CategoryToAddInterface): Promise<void> {
    await this.knex.table(DB.TABLE_NAME).insert(category);
  }

  async updateCategory(id: number, category: CategoryInterface): Promise<void> {
    await this.knex.table(DB.TABLE_NAME).where({ id }).update(category);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.knex.table(DB.TABLE_NAME).where({ id }).delete();
  }
}
