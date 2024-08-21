import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../modules/database/database.module';
import { ProductTypeToPropertiesController } from './product-type_to_properties.controller';
import { ProductTypeToPropertiesService } from './product-type_to_properties.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductTypeToPropertiesController],
  providers: [ProductTypeToPropertiesService],
  exports: [ProductTypeToPropertiesService],
})
export class ProductTypeToPropertiesModule {}
