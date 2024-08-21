import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductPropertyToValuesController } from './product-property_to_values.controller';
import { ProductPropertyToValuesService } from './product-property_to_values.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductPropertyToValuesController],
  providers: [ProductPropertyToValuesService],
  exports: [ProductPropertyToValuesService],
})
export class ProductPropertyToValuesModule {}
