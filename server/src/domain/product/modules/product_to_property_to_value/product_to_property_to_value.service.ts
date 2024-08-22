import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  ProductPropertyInterface,
  ProductToPropertyToValueInterface,
} from '../../product.domain.interface';
import { DB } from '../../product.domain.registry';
import { ProductPropertyService } from '../product-property/product-property.service';

const {
  TABLES: {
    PRODUCT_TO_PROPERTY_TO_VALUE,
    PRODUCT_PROPERTIES,
    PRODUCT_PROPERTY_VALUES,
    PRODUCT_PROPERTY_TO_VALUES,
  },
} = DB;

interface ProductPropertiesModelInterface {
  [key: string]: number | string;
}

const buildProductPropertyValueRowToInsert = (
  productProperty: ProductPropertyInterface,
  formModel: ProductPropertiesModelInterface,
  product_id: number,
): ProductToPropertyToValueInterface => {
  const row: ProductToPropertyToValueInterface = {
    product_id,
    product_property_name: productProperty.name,
  };

  if (productProperty.has_predefined_values) {
    row.product_property_value_id = formModel[productProperty.name] as number;
  } else {
    row.raw_value = formModel[productProperty.name] as string;
  }

  return row;
};

@Injectable()
export class ProductToPropertyToValueService {
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly productPropertyService: ProductPropertyService,
  ) {}

  async addValuesToPropertiesOfProduct(
    product_id: number,
    formModel: ProductPropertiesModelInterface,
  ): Promise<void> {
    const propertyNames = Object.keys(formModel);
    const propertyRows =
      await this.productPropertyService.getProductProperties(propertyNames);

    const rowsToInsert: ProductToPropertyToValueInterface[] = propertyRows.map(
      (propertyRow) =>
        buildProductPropertyValueRowToInsert(
          propertyRow,
          formModel,
          product_id,
        ),
    );

    await this.knex.table(PRODUCT_TO_PROPERTY_TO_VALUE).insert(rowsToInsert);
  }
}
