import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../modules/database/database.module';
import { PaymentService } from './payment.service';

@Module({
  imports: [DatabaseModule],
  exports: [PaymentService],
  controllers: [],
  providers: [PaymentService],
})
export class PaymentModule {}
