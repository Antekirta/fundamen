import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductPropertyController } from './product-property.controller';
import { ProductPropertyService } from './product-property.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductPropertyController],
  providers: [ProductPropertyService],
  exports: [ProductPropertyService],
})
export class ProductPropertyModule {}
