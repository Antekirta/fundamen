import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ROUTES } from '../../user.domain.registry';
import { UserService } from './user.service';
import {UserInterface, UserSecureInterface, UserToAddInterface} from '../../user.interface.domain';

@Controller(ROUTES.USERS.BASE)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getProducts(
    @Query() searchParams: Partial<UserInterface>,
  ): Promise<UserInterface[]> {
    return await this.userService.getUsers(searchParams);
  }

  @Get(`${ROUTES.USERS.ID}/:id`)
  async getUserById(@Param('id') id: number): Promise<UserSecureInterface> {
    return await this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: UserToAddInterface): Promise<void> {
    await this.userService.addUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: Partial<UserToAddInterface>,
  ): Promise<void> {
    await this.userService.updateUser(id, user);
  }

  @Put(`${ROUTES.USERS.PASSWORD}/:id`)
  async updateUserPassword(
    @Param('id') id: number,
    @Body() user: Pick<UserToAddInterface, 'password'>,
  ): Promise<void> {
    await this.userService.updateUserPassword(id, user.password);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
