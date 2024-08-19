import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductDescriptionService } from './productDescription.service';
import { ProductDescriptionController } from './productDescription.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductDescriptionController],
  providers: [ProductDescriptionService],
  exports: [ProductDescriptionService],
})
export class ProductDescriptionModule {}
