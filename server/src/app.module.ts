import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { ProductModule } from './domain/product/modules/product/product.module';
import { CategoryModule } from './domain/product/modules/category/category.module';
import { ProductToCategoryModule } from './domain/product/modules/product_to_category/product_to_category.module';
import { CategoryToCategoryModule } from './domain/product/modules/category_to_category/category_to_category.module';
import { UserModule } from './domain/user/modules/user/user.module';
import { OrderModule } from './domain/order/modules/order.module';
import { AuthModule } from './domain/user/modules/auth/auth.module';
import { StripeModule } from './domain/payment/modules/stripe/stripe.module';

@Module({
  imports: [
    DatabaseModule,
    ProductModule,
    CategoryModule,
    ProductToCategoryModule,
    CategoryToCategoryModule,
    UserModule,
    OrderModule,
    AuthModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
