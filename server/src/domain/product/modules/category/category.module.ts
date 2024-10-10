import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryServiceSeed } from './category.service.seed';
import { ProductToCategoryModule } from '../product_to_category/product_to_category.module';

const providersLocal = [CategoryService];
const exportsLocal = [CategoryService];

if (true) {
  providersLocal.push(CategoryServiceSeed);
  exportsLocal.push(CategoryServiceSeed);
}

@Module({
  imports: [DatabaseModule, ProductToCategoryModule],
  controllers: [CategoryController],
  providers: providersLocal,
  exports: exportsLocal,
})
export class CategoryModule {}
