import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  DeliveryAddressInterface,
  DeliveryAddressToAddInterface,
} from './delivery.interface.domain';
import { DB } from './delivery.registry.domain';

const {
  TABLES: { DA, DATU, DATO },
} = DB;

@Injectable()
export class DeliveryService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getAddressesByUserId(
    user_id: number,
  ): Promise<DeliveryAddressInterface[]> {
    await this.knex
      .table(DATU)
      .where({ user_id })
      .join(DA, `${DATU}.delivery_address_id`, `${DA}.id`);
  }

  async getAddressesByOrderId(
    order_id: number,
  ): Promise<DeliveryAddressInterface[]> {
    await this.knex
      .table(DATO)
      .where({ order_id })
      .join(DA, `${DATO}.delivery_address_id`, `${DA}.id`);
  }

  async createAddress(
    address: DeliveryAddressToAddInterface,
  ): Promise<Array<Pick<DeliveryAddressInterface, 'id'>>> {
    const keysToReturn: Array<keyof DeliveryAddressInterface> = ['id'];

    const ids = (await this.knex
      .table(DA)
      .returning(keysToReturn)
      .insert(address)) as unknown as Array<
      Pick<DeliveryAddressInterface, 'id'>
    >;

    return ids;
  }

  async addAddressToUser(user_id: number, delivery_address_id: number) {
    await this.knex.table(DATU).insert({ user_id, delivery_address_id });
  }

  async addAddressToOrder(order_id: number, delivery_address_id: number) {
    await this.knex.table(DATO).insert({ order_id, delivery_address_id });
  }
}
