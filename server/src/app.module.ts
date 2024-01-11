import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { ProductModule } from './domain/product/modules/product/product.module';
import { CategoryModule } from './domain/product/modules/category/category.module';

@Module({
  imports: [DatabaseModule, ProductModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
