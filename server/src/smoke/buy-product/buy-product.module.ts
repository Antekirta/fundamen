import { Module } from '@nestjs/common';
import { CategoryModule } from '../../domain/product/modules/category/category.module';
import { BuyProductService } from './buy-product.service';
import { ProductToCategoryModule } from '../../domain/product/modules/product_to_category/product_to_category.module';
import { DatabaseModule } from '../../modules/database/database.module';
import { ProductModule } from '../../domain/product/modules/product/product.module';
import { BasketModule } from '../../domain/basket/basket.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    ProductModule,
    ProductToCategoryModule,
    BasketModule,
  ],
  controllers: [],
  providers: [BuyProductService],
})
export class BuyProductModule {}
