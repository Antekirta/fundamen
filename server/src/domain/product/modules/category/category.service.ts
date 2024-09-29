import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

import {
  CategoryInterface,
  CategoryToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';
import { ProductToCategoryService } from '../product_to_category/product_to_category.service';
import { PaginationInterface } from '../../../../shared/interfaces/pagination';
import { ResponseInterface } from '../../../../shared/interfaces/response';
import { getPagination } from '../../../../shared/utils/pagination';
import { getSorting } from '../../../../shared/utils/sorting';
import { SortingInterface } from '../../../../shared/interfaces/sorting';

const {
  TABLES: { C },
} = DB;

@Injectable()
export class CategoryService {
  private slugify;

  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly productToCategoryService: ProductToCategoryService,
  ) {
    (async () => {
      const { default: slugify } = await import('@sindresorhus/slugify');
      this.slugify = slugify;
    })();
  }

  /** GET */
  async getCategories(
    pagination?: PaginationInterface,
    sorting?: SortingInterface,
  ): Promise<ResponseInterface<CategoryInterface[]>> {
    const { page, itemsPerPage } = pagination;

    if (!pagination) {
      return this.knex.table(C);
    }

    const rows = await this.knex
      .table(C)
      .orderBy(sorting.sortBy, sorting.sortDirection)
      .select('*', this.knex.raw('COUNT(*) OVER() as total'))
      .offset((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    return {
      data: rows,
      meta: {
        pagination: getPagination({
          total: rows[0].total,
        }),
        sorting: getSorting({
          sortBy: sorting.sortBy,
          sortDirection: sorting.sortDirection,
        }),
      },
    };
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
  async addCategories(
    categories: CategoryToAddInterface[],
  ): Promise<Array<Pick<CategoryInterface, 'id'>>> {
    const keysToReturn: Array<keyof CategoryInterface> = ['id'];

    const records = (await this.knex
      .table(C)
      .returning(keysToReturn)
      .insert(
        categories.map((category) => ({
          ...category,
          slug: this.slugify(category.name),
        })),
      )) as unknown as Array<Pick<CategoryInterface, 'id'>>;

    const ids = records.map((record) => record.id);
    const keysToSlugify: Array<keyof CategoryInterface> = ['slug', 'id'];

    await this.knex
      .table(C)
      .whereIn('id', ids)
      .update({
        slug: this.knex.raw("?? || '-' || ??", keysToSlugify),
      });

    return records;
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
