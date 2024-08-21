import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { Product_to_property_to_valueController } from './product_to_property_to_value.controller';
import { Product_to_property_to_valueService } from './product_to_property_to_value.service';

@Module({
  imports: [DatabaseModule],
  controllers: [Product_to_property_to_valueController],
  providers: [Product_to_property_to_valueService],
  exports: [Product_to_property_to_valueService],
})
export class Product_to_property_to_valueModule {}
