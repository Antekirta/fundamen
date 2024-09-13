import { Request } from 'express';
import {
  Controller,
  Get,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ROUTES, USER_TYPES } from '../../user.domain.registry';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserSecureInterface } from '../../user.interface.domain';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SuperadminAuthGuard } from './superadmin-auth.guard';
import { UserService } from '../user/user.service';

@Controller(ROUTES.AUTH.BASE)
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  isAuth(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get(ROUTES.AUTH.ROLE)
  async hasRole(@Req() req: Request, @Query('role') role: string) {
    if (!Object.values(USER_TYPES).includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }

    const user = req.user as UserSecureInterface;

    const userType = await this.userService.getUserType(user.id);

    if (userType === role) {
      return true;
    }

    throw new UnauthorizedException();
  }

  @UseGuards(LocalAuthGuard)
  @Post(ROUTES.AUTH.LOGIN)
  async login(@Req() req: Request) {
    const { access_token, userName, userId } = this.authService.login(
      req.user as UserSecureInterface,
    );

    return { jwt: access_token, userName, userId };
  }

  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, SuperadminAuthGuard)
  @Get('test-superadmin')
  async testSuperadmin() {
    return 'test-superadmin succeeded!';
  }
}
