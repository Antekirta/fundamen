import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
