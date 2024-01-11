import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  CategoryInterface,
  CategoryToAddInterface,
} from './category.interface';

const TABLES = {
  CATEGORIES: 'categories',
  };

@Injectable()
export class CategoryService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getCategories(): Promise<CategoryInterface[]> {
    return this.knex.table(TABLES.CATEGORIES);
  }

  async getCategoryById(id: number): Promise<CategoryInterface> {
    return this.knex
      .table(TABLES.CATEGORIES)
      .where({ id }) as unknown as Promise<CategoryInterface>;
  }

  async getCategoryBySlug(slug: string): Promise<CategoryInterface> {
    return this.knex
      .table(TABLES.CATEGORIES)
      .where({ slug }) as unknown as Promise<CategoryInterface>;
  }

  async addCategory(category: CategoryToAddInterface): Promise<void> {
    await this.knex.table(TABLES.CATEGORIES).insert(category);
  }

  async updateCategory(id: number, category: CategoryInterface): Promise<void> {
    await this.knex.table(TABLES.CATEGORIES).where({ id }).update(category);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.knex.table(TABLES.CATEGORIES).where({ id }).delete();
  }
}
