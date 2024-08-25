import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ROUTES } from '../../user.domain.registry';
import { UserTypeService } from './user-type.service';
import {
  UserTypeInterface,
  UserTypeToAddInterface,
} from '../../user.interface.domain';

@Controller(ROUTES.USER_TYPES.BASE)
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {}

  @Get(`${ROUTES.USER_TYPES.ID}/:id`)
  async getUserTypeById(@Param('id') id: number): Promise<UserTypeInterface> {
    return await this.userTypeService.getUserTypeById(id);
  }

  @Post()
  async addUserType(@Body() userType: UserTypeToAddInterface): Promise<void> {
    await this.userTypeService.addUserType(userType);
  }

  @Put(':id')
  async updateUserType(
    @Param('id') id: number,
    @Body() userType: UserTypeToAddInterface,
  ): Promise<void> {
    await this.userTypeService.updateUserType(id, userType);
  }

  @Delete(':id')
  async deleteUserType(@Param('id') id: number): Promise<void> {
    await this.userTypeService.deleteUserType(id);
  }
}
