import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { ProductToCategoryModule } from '../product_to_category/product_to_category.module';

@Module({
  imports: [DatabaseModule, ProductToCategoryModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
