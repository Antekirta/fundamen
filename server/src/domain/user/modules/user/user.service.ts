import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { DB } from '../../user.domain.registry';
import {
  UserInterface,
  UserSecureInterface,
  UserToAddInterface,
} from '../../user.interface.domain';
import { hashPassword } from '../../user.utils.domain';
import { UserTypeService } from './user-type.service';

const {
  TABLES: { U, UT },
} = DB;

@Injectable()
export class UserService {
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly userTypeService: UserTypeService,
  ) {}

  async getUserById(userId: number): Promise<UserSecureInterface> {
    const result = (await this.knex
      .table(U)
      .where({
        [`${U}.id`]: userId,
      } as Partial<UserInterface>)
      .join(UT, `${U}.user_type`, `${UT}.id`)
      .select(
        `${U}.id`,
        `${U}.name`,
        `${U}.first_name`,
        `${U}.last_name`,
        `${U}.email`,
        `${U}.created_date`,
        `${UT}.name as user_type`,
      )
      .limit(1)) as unknown as Promise<UserSecureInterface>;

    return result[0];
  }

  async getUsers(
    searchParams: Partial<UserInterface>,
  ): Promise<UserInterface[]> {
    this.getUserType(1);

    return this.knex.table(U).where({
      ...searchParams,
    });
  }

  async getUserType(userId: number): Promise<string> {
    const userTypes = await this.knex(U)
      .table(U)
      .where({
        [`${U}.id`]: userId,
      })
      .join(UT, `${U}.user_type`, `${UT}.id`)
      .select(`${UT}.name`);

    return userTypes[0]?.name || '';
  }

  async addUser(user: UserToAddInterface): Promise<void> {
    const userToAdd: UserToAddInterface = {
      ...user,
      password: await hashPassword(user.password),
      created_date: new Date().toISOString(),
    };

    await this.knex.table(U).insert(userToAdd);
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

  async clearTable(): Promise<void> {
    await this.knex.raw(`TRUNCATE TABLE ${U} RESTART IDENTITY CASCADE`);
  }
}
