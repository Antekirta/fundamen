import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { ProductToPropertyToValueInterface } from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';

const {
  TABLES: {
    PRODUCT_TO_PROPERTY_TO_VALUE,
    PRODUCT_PROPERTIES,
    PRODUCT_PROPERTY_VALUES,
    PRODUCT_PROPERTY_TO_VALUES,
  },
} = DB;

interface ValuesToPropertiesInterface {

}

// const valuesToPropertiesPayload = {
//   property_id:
// }

@Injectable()
export class ProductToPropertyToValueService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async addValuesToPropertiesOfProduct(
    product_id: number,
  ): Promise<void> {

  }
}
