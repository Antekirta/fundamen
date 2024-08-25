import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { USER_TYPES } from '../../user.domain.registry';

@Injectable()
export class SuperadminAuthGuard {
  constructor(private readonly userService: UserService) {}

  async canActivate(context) {
    const request = context.switchToHttp().getRequest();

    const userType = await this.userService.getUserType(request.user.id);

    return userType === USER_TYPES.SUPERADMIN;
  }
}
