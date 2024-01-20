import { Request } from 'express';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ROUTES } from '../../user.domain.registry';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserSecureInterface } from '../../user.interface.domain';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller(ROUTES.AUTH.BASE)
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post(ROUTES.AUTH.LOGIN)
  async login(@Req() req: Request) {
    return this.authService.login(req.user as UserSecureInterface);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
