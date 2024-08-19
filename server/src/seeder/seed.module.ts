import { Module } from '@nestjs/common';
import { DatabaseModule } from '../modules/database/database.module';
import { CategoryModule } from '../domain/product/modules/category/category.module';
import { CategoryToCategoryModule } from '../domain/product/modules/category_to_category/category_to_category.module';
import { SeedService } from './seed.service';
import { ProductModule } from '../domain/product/modules/product/product.module';
import { ProductToCategoryModule } from '../domain/product/modules/product_to_category/product_to_category.module';
import { ProductDescriptionModule } from '../domain/product/modules/productDescription/productDescription.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    CategoryToCategoryModule,
    ProductModule,
    ProductToCategoryModule,
    ProductDescriptionModule,
  ],
  providers: [SeedService],
})
export class SeedModule {}
