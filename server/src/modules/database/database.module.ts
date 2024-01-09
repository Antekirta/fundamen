import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'antekirta',
          password: 'fccda673',
          database: 'fundamen-test',
        },
      },
    }),
  ],
})
export class DatabaseModule {}
