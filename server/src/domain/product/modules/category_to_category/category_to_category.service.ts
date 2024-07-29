import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from '../../product.domain.registry';
import { CategoryToCategoriesInterface } from '../../product.domain.interface';

const {
  TABLES: { C, CTC },
} = DB;

@Injectable()
export class CategoryToCategoryService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getCategoriesOfCategory(categoryId: number): Promise<any> {
    const filtered = 'filtered_ctc';

    return this.knex
      .select('*')
      .from(function () {
        this.select('*')
          .from(CTC)
          .where('category_id', categoryId)
          .as(filtered);
      })
      .innerJoin(C, `${filtered}.subcategory_id`, `${C}.id`);
  }

  async addCategoryToCategory(categoryId: number, subcategoryId: number) {
    await this.knex.table(CTC).insert({
      category_id: categoryId,
      subcategory_id: subcategoryId,
    } as CategoryToCategoriesInterface);
  }

  async deleteCategoryFromCategory(categoryId: number, subcategoryId: number) {
    await this.knex
      .table(CTC)
      .where({
        category_id: categoryId,
        subcategory_id: subcategoryId,
      } as CategoryToCategoriesInterface)
      .delete();
  }

  async deleteSubcategoryFromAllCategories(subcategoryId: number) {
    await this.knex
      .table(CTC)
      .where({
        subcategory_id: subcategoryId,
      } as Partial<CategoryToCategoriesInterface>)
      .delete();
  }

  async deleteAllSubcategoriesFromCategory(categoryId: number) {
    await this.knex
      .table(CTC)
      .where({
        category_id: categoryId,
      } as Partial<CategoryToCategoriesInterface>)
      .delete();
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${CTC} RESTART IDENTITY CASCADE`);
  }
}
