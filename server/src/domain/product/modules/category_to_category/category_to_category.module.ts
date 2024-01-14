import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { CategoryToCategoryController } from './category_to_category.controller';
import { CategoryToCategoryService } from './category_to_category.service';

@Module({
  imports: [DatabaseModule],
  exports: [CategoryToCategoryService],
  controllers: [CategoryToCategoryController],
  providers: [CategoryToCategoryService],
})
export class CategoryToCategoryModule {}
