import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ROUTES } from '../../user.domain.registry';
import { UserService } from './user.service';
import {
  UserInterface,
  UserSecureInterface,
  UserToAddInterface,
} from '../../user.interface.domain';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SuperadminAuthGuard } from '../auth/superadmin-auth.guard';

@Controller(ROUTES.USERS.BASE)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard, SuperadminAuthGuard)
  async getUsers(
    @Query() searchParams: Partial<UserInterface>,
  ): Promise<UserInterface[]> {
    return await this.userService.getUsers(searchParams);
  }

  @UseGuards(JwtAuthGuard)
  @Get(`${ROUTES.USERS.ID}/:id`)
  async getUserById(@Param('id') id: number): Promise<UserSecureInterface> {
    return await this.userService.getUserById(id);
  }

  @UseGuards(JwtAuthGuard, SuperadminAuthGuard)
  @Post()
  async createUser(@Body() user: UserToAddInterface): Promise<void> {
    await this.userService.addUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: Partial<UserToAddInterface>,
  ): Promise<void> {
    await this.userService.updateUser(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(`${ROUTES.USERS.PASSWORD}/:id`)
  async updateUserPassword(
    @Param('id') id: number,
    @Body() user: Pick<UserToAddInterface, 'password'>,
  ): Promise<void> {
    await this.userService.updateUserPassword(id, user.password);
  }

  @UseGuards(JwtAuthGuard, SuperadminAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
