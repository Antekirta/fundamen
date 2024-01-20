import { Request } from 'express';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ROUTES } from '../../user.domain.registry';
import { LocalAuthGuard } from './local-auth.guard';

@Controller(ROUTES.AUTH.BASE)
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return req.user;
  }
}
