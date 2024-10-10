import { Injectable } from '@nestjs/common';
import { CategoryInterface } from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';
import { CategoryService } from './category.service';

const {
  TABLES: { C },
} = DB;

@Injectable()
export class CategoryServiceSeed extends CategoryService {
  async getCategoriesSeed(): Promise<CategoryInterface[]> {
    return this.knex.table(C);
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${C} RESTART IDENTITY CASCADE`);
  }
}
