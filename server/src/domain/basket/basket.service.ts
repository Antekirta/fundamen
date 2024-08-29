import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from './basket.registry.domain';
import {
  BasketInterface,
  BasketToAddInterface,
  ProductInBasketInterface,
} from './basket.interface.domain';

const {
  TABLES: { B, PTB },
} = DB;

@Injectable()
export class BasketService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  /** GET */
  getBasketById(id: number): Promise<BasketInterface> {
    return this.knex
      .table(B)
      .where({ id } as Partial<BasketInterface>)
      .limit(1) as unknown as Promise<BasketInterface>;
  }

  getBasketByUserId(user_id: number): Promise<BasketInterface> {
    return this.knex
      .table(B)
      .where({ user_id } as Partial<BasketInterface>)
      .limit(1) as unknown as Promise<BasketInterface>;
  }

  getProductsInBasket(basket_id: number): Promise<ProductInBasketInterface[]> {
    return this.knex.table(PTB).where({ basket_id }) as unknown as Promise<
      ProductInBasketInterface[]
    >;
  }

  /** ADD */
  createBasket(
    basket: BasketToAddInterface,
  ): Promise<Array<Pick<BasketInterface, 'id'>>> {
    const keysToReturn: Array<keyof BasketInterface> = ['id'];

    return this.knex.table(B).returning(keysToReturn).insert(basket);
  }

  async addProductToBasket(product: ProductInBasketInterface): Promise<void> {
    await this.knex.table(PTB).insert(product);
  }

  async addProductsToBasketBulk(
    products: ProductInBasketInterface[],
  ): Promise<void> {
    await this.knex.table(PTB).insert(products);
  }

  /** UPDATE */
  async updateProductInBasket({
    basket_id,
    product_id,
    quantity,
  }: ProductInBasketInterface): Promise<void> {
    await this.knex
      .table(PTB)
      .where({ basket_id, product_id })
      .update({ quantity });
  }

  /** DELETE */
  async deleteProductFromBasket({
    basket_id,
    product_id,
  }: Partial<ProductInBasketInterface>): Promise<void> {
    await this.knex.table(PTB).where({ basket_id, product_id }).delete();
  }

  async deleteBasket(id: number): Promise<void> {
    await this.knex.table(PTB).where({ basket_id: id }).delete();

    await this.knex.table(B).where({ id }).delete();
  }

  /** SERVICE METHOD! */
  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${B} RESTART IDENTITY CASCADE`);
    await this.knex.raw(`TRUNCATE TABLE ${PTB} RESTART IDENTITY CASCADE`);
  }
}
