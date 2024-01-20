import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from '../../user.domain.registry';
import { UserInterface, UserToAddInterface } from '../../user.interface.domain';
import { hashPassword } from '../../user.utils.domain';

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

  async addUser(user: UserToAddInterface): Promise<void> {
    await this.knex.table(U).insert({
      ...user,
      password: await hashPassword(user.password),
    } as unknown as UserToAddInterface);
  }

  /** INFO: Without password! */
  async updateUser(
    id: number,
    user: Partial<Omit<UserToAddInterface, 'password'>>,
  ): Promise<void> {
    await this.knex.table(U).where({ id }).update(user);
  }

  async updateUserPassword(id: number, password: string): Promise<void> {
    await this.knex
      .table(U)
      .where({ id })
      .update({
        password: await hashPassword(password),
      } as unknown as Pick<UserToAddInterface, 'password'>);
  }

  async deleteUser(id: number): Promise<void> {
    await this.knex.table(U).where({ id }).delete();
  }
}
