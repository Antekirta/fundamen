import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  OrderInterface,
  OrderStatus,
  OrderToAddInterface,
} from '../order.interface.domain';
import { DB } from '../order.registry.domain';

const {
  TABLES: { O, PTO },
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

  async createOrder(
    order: OrderToAddInterface,
  ): Promise<Array<Pick<OrderInterface, 'id'>>> {
    return this.knex.table(O).returning(['id']).insert(order);
  }

  async addProductsToOrder(orderId: number, productsIds: number[]) {
    await this.knex.table(PTO).insert(
      productsIds.map((product_id) => {
        return {
          order_id: orderId,
          product_id,
        };
      }),
    );
  }

  async setOrderStatus(orderId: number, status: OrderStatus) {
    await this.knex.table(O).where({ id: orderId }).update({ status });
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
