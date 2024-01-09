import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getFromDb() {
    const products = await this.knex.table('products');

    return { products };
  }
}
