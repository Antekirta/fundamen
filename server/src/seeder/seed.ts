import { resolve } from 'path';
import { config as loadEnv } from 'dotenv';

// INFO: It's important to load env before any modules
loadEnv({
  path: resolve(__dirname, '../../../.env.dev'),
});

import { NestFactory } from '@nestjs/core';
import { SeedService } from './seed.service';
import { SeedModule } from './seed.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeedModule);

  const seedService = app.get(SeedService);

  await seedService.seed();

  await app.close();
}

bootstrap();
