import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from './payment.registry.domain';
import {
  PaymentMethodInterface,
  PaymentMethodToAddInterface,
} from './payment.interface.domain';

const {
  TABLES: { PM, PMTO, PMTU },
} = DB;

@Injectable()
export class PaymentService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getPaymentMethodsByUserId(
    user_id: number,
  ): Promise<PaymentMethodInterface> {
    return this.knex
      .table(PMTU)
      .where({ user_id })
      .join(
        PM,
        `${PMTU}.payment_method_id`,
        `${PM}.id`,
      ) as unknown as Promise<PaymentMethodInterface>;
  }

  async getPaymentMethodByOrderId(
    order_id: number,
  ): Promise<PaymentMethodInterface> {
    return this.knex
      .table(PMTO)
      .where({ order_id })
      .join(
        PM,
        `${PMTO}.payment_method_id`,
        `${PM}.id`,
      ) as unknown as Promise<PaymentMethodInterface>;
  }

  async createPaymentMethod(
    address: PaymentMethodToAddInterface,
  ): Promise<Array<Pick<PaymentMethodInterface, 'id'>>> {
    const keysToReturn: Array<keyof PaymentMethodInterface> = ['id'];

    const ids = (await this.knex
      .table(PM)
      .returning(keysToReturn)
      .insert(address)) as unknown as Array<Pick<PaymentMethodInterface, 'id'>>;

    return ids;
  }

  async addPaymentMethodToUser(
    user_id: number,
    delivery_address_id: number,
  ): Promise<void> {
    await this.knex.table(PMTU).insert({ user_id, delivery_address_id });
  }

  async addPaymentMethodToOrder(
    order_id: number,
    delivery_address_id: number,
  ): Promise<void> {
    await this.knex.table(PMTO).insert({ order_id, delivery_address_id });
  }
}
