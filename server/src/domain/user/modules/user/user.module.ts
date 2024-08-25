import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserTypeService } from './user-type.service';
import { UserTypeController } from './user-type.controller';

@Module({
  imports: [],
  exports: [UserService, UserTypeService],
  controllers: [UserController, UserTypeController],
  providers: [UserService, UserTypeService],
})
export class UserModule {}
