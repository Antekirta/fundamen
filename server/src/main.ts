import 'dotenv/config';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use('/uploads', express.static(join(process.cwd(), '../uploads')));

  await app.listen(process.env.BE_PORT);
}
bootstrap();
