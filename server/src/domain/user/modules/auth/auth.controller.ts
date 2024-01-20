import { Request } from 'express';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ROUTES } from '../../user.domain.registry';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserSecureInterface } from '../../user.interface.domain';

@Controller(ROUTES.AUTH.BASE)
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user as UserSecureInterface);
  }
}
