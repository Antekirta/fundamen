import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
  exports: [ProductTypeService],
})
export class ProductTypeModule {}
