import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from '../../user.domain.registry';
import { UserInterface, UserToAddInterface } from '../../user.interface.domain';

const {
  TABLES: { U },
} = DB;

@Injectable()
export class UserService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getUserById(id: number): Promise<UserInterface> {
    return this.knex
      .table(U)
      .where({
        id,
      } as Partial<UserInterface>)
      .limit(1) as unknown as Promise<UserInterface>;
  }

  async getUsers(
    searchParams: Partial<UserInterface>,
  ): Promise<UserInterface[]> {
    return this.knex.table(U).where({
      ...searchParams,
    });
  }

  async addUser(product: UserToAddInterface): Promise<void> {
    await this.knex.table(U).insert(product);
  }

  async updateUser(
    id: number,
    user: Partial<UserToAddInterface>,
  ): Promise<void> {
    await this.knex.table(U).where({ id }).update(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.knex.table(U).where({ id }).delete();
  }
}
