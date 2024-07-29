import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductToCategoryController } from './product_to_category.controller';
import { ProductToCategoryService } from './product_to_category.service';

@Module({
  imports: [DatabaseModule],
  exports: [ProductToCategoryService],
  controllers: [ProductToCategoryController],
  providers: [ProductToCategoryService],
})
export class ProductToCategoryModule {}
