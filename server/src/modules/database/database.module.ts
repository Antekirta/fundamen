import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: process.env.DATABASE_CLIENT,
        connection: {
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
        },
      },
    }),
  ],
})
export class DatabaseModule {}
