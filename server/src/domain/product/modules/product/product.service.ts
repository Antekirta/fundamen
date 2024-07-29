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
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly productToCategoryService: ProductToCategoryService,
  ) {}

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

  async addProduct(product: ProductToAddInterface): Promise<void> {
    await this.knex.table(P).insert(product);
  }

  async addProductBulk(
    products: ProductToAddInterface[],
  ): Promise<Array<Pick<ProductInterface, 'id'>>> {
    const keysToReturn: Array<keyof ProductInterface> = ['id'];

    return this.knex.table(P).returning(keysToReturn).insert(products);
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
