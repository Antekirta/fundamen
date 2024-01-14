import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { OrderInterface, OrderToAddInterface } from '../order.interface.domain';
import { DB } from '../order.registry.domain';

const {
  TABLES: { O },
} = DB;

@Injectable()
export class OrderService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getOrderById(id: number): Promise<OrderInterface> {
    return this.knex
      .table(O)
      .where({
        id,
      } as Partial<OrderInterface>)
      .limit(1) as unknown as Promise<OrderInterface>;
  }

  async getOrders(
    searchParams: Partial<OrderInterface>,
  ): Promise<OrderInterface[]> {
    return this.knex.table(O).where({
      ...searchParams,
    });
  }

  async addOrder(product: OrderToAddInterface): Promise<void> {
    await this.knex.table(O).insert(product);
  }

  async updateOrder(
    id: number,
    Order: Partial<OrderToAddInterface>,
  ): Promise<void> {
    await this.knex.table(O).where({ id }).update(Order);
  }

  async deleteOrder(id: number): Promise<void> {
    await this.knex.table(O).where({ id }).delete();
  }
}
