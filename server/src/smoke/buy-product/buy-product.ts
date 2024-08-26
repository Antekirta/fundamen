import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { BuyProductModule } from './buy-product.module';
import { BuyProductService } from './buy-product.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(BuyProductModule);

  const buyProductService = app.get(BuyProductService);

  await buyProductService.run();

  await app.close();
}

bootstrap();
