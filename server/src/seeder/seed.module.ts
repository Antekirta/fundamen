import { Module } from '@nestjs/common';
import { DatabaseModule } from '../modules/database/database.module';
import { CategoryModule } from '../domain/product/modules/category/category.module';
import { CategoryToCategoryModule } from '../domain/product/modules/category_to_category/category_to_category.module';
import { SeedService } from './seed.service';
import { ProductModule } from '../domain/product/modules/product/product.module';
import { ProductToCategoryModule } from '../domain/product/modules/product_to_category/product_to_category.module';
import { ProductTypeModule } from '../domain/product/modules/product-type/product-type.module';
import { ProductPropertyModule } from '../domain/product/modules/product-property/product-property.module';
import { ProductPropertyValueModule } from '../domain/product/modules/product-property-value/product-property-value.module';
import { ProductTypeToPropertiesModule } from '../domain/product/modules/product-type_to_properties/product-type_to_properties.module';
import { ProductPropertyToValuesModule } from '../domain/product/modules/product-property_to_values/product-property_to_values.module';
import { ProductToPropertyToValueModule } from '../domain/product/modules/product_to_property_to_value/product_to_property_to_value.module';
import { UserModule } from '../domain/user/modules/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    CategoryToCategoryModule,
    ProductModule,
    ProductToCategoryModule,
    ProductTypeModule,
    ProductPropertyModule,
    ProductPropertyValueModule,
    ProductTypeToPropertiesModule,
    ProductPropertyToValuesModule,
    ProductToPropertyToValueModule,
    UserModule,
  ],
  providers: [SeedService],
})
export class SeedModule {}
