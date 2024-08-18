import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductInterface,
  ProductToAddInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';
import { ProductToCategoryService } from '../product_to_category/product_to_category.service';

const {
  TABLES: { P },
} = DB;

@Injectable()
export class ProductService {
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

  async getProductById(id: number): Promise<ProductInterface> {
    return this.knex.table(P).where({
      id,
    } as Partial<ProductInterface>) as unknown as Promise<ProductInterface>;
  }

  async getProducts(
    searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return this.knex.table(P).where({
      ...searchParams,
    });
  }

  async addProductsBase(
    products: ProductToAddInterface[],
  ): Promise<Array<Pick<ProductInterface, 'id'>>> {
    const keysToReturn: Array<keyof ProductInterface> = ['id'];

    const records = (await this.knex
      .table(P)
      .returning(keysToReturn)
      .insert(
        products.map((product) => ({
          ...product,
          slug: this.slugify(product.name),
        })),
      )) as unknown as Array<Pick<ProductInterface, 'id'>>;

    const ids = records.map((record) => record.id);
    const keysToSlugify: Array<keyof ProductInterface> = ['slug', 'id'];

    await this.knex
      .table(P)
      .whereIn('id', ids)
      .update({
        slug: this.knex.raw("?? || '-' || ??", keysToSlugify),
      });

    return records;
  }

  async updateProduct(
    id: number,
    product: Partial<ProductToAddInterface>,
  ): Promise<void> {
    await this.knex.table(P).where({ id }).update(product);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productToCategoryService.deleteProductFromAllCategories(id);

    await this.knex.table(P).where({ id }).delete();
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${P} RESTART IDENTITY CASCADE`);
  }
}
