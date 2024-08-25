import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from '../../user.domain.registry';
import {
  UserTypeInterface,
  UserTypeToAddInterface,
} from '../../user.interface.domain';

const {
  TABLES: { UT },
} = DB;

@Injectable()
export class UserTypeService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getUserTypeById(id: number): Promise<UserTypeInterface> {
    return this.knex
      .table(UT)
      .where({
        id,
      } as Partial<UserTypeInterface>)
      .limit(1) as unknown as Promise<UserTypeInterface>;
  }

  async getUserTypes(): Promise<UserTypeInterface[]> {
    return this.knex.table(UT);
  }

  async addUserType(userType: UserTypeToAddInterface): Promise<void> {
    await this.knex.table(UT).insert(userType);
  }

  async updateUserType(
    id: number,
    userType: UserTypeToAddInterface,
  ): Promise<void> {
    await this.knex.table(UT).where({ id }).update(userType);
  }

  async deleteUserType(id: number): Promise<void> {
    await this.knex.table(UT).where({ id }).delete();
  }

  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${UT} RESTART IDENTITY CASCADE`);
  }
}
