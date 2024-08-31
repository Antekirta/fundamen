import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DatabaseModule } from '../../modules/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [DeliveryService],
  exports: [DeliveryService],
})
export class DeliveryModule {}
