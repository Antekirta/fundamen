import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { Product_to_property_to_valueController } from './product_to_property_to_value.controller';
import { ProductToPropertyToValueService } from './product_to_property_to_value.service';
import { ProductPropertyModule } from '../product-property/product-property.module';

@Module({
  imports: [DatabaseModule, ProductPropertyModule],
  controllers: [Product_to_property_to_valueController],
  providers: [ProductToPropertyToValueService],
  exports: [ProductToPropertyToValueService],
})
export class Product_to_property_to_valueModule {}
