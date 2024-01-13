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

  async getCategories(): Promise<CategoryInterface[]> {
    return this.knex.table(C);
  }

  async getCategoryById(id: number): Promise<CategoryInterface> {
    return this.knex
      .table(C)
      .where({ id }) as unknown as Promise<CategoryInterface>;
  }

  async getCategoryBySlug(slug: string): Promise<CategoryInterface> {
    console.log('getCategoryBySlug slug: ', slug);
    return this.knex
      .table(C)
      .where({ slug }) as unknown as Promise<CategoryInterface>;
  }

  async addCategory(category: CategoryToAddInterface): Promise<void> {
    await this.knex.table(C).insert(category);
  }

  async updateCategory(id: number, category: CategoryInterface): Promise<void> {
    await this.knex.table(C).where({ id }).update(category);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.productToCategoryService.deleteAllProductsFromCategory(id);

    await this.knex.table(C).where({ id }).delete();
  }
}
