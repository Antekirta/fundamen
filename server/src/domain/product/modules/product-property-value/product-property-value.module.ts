import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductPropertyValueController } from './product-property-value.controller';
import { ProductPropertyValueService } from './product-property-value.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductPropertyValueController],
  providers: [ProductPropertyValueService],
  exports: [ProductPropertyValueService],
})
export class ProductPropertyValueModule {}
