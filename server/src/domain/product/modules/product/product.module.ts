import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductToCategoryModule } from '../product_to_category/product_to_category.module';

@Module({
  imports: [DatabaseModule, ProductToCategoryModule],
  exports: [ProductService],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
