import { resolve, join } from 'path';
import { config as loadEnv } from 'dotenv';

// INFO: It's important to load env before any modules
loadEnv({
  path: resolve(__dirname, '../../.env.dev'),
});

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
