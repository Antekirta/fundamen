import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserInterface } from '../../user.interface.domain';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(
    username: string,
    providedPassword: string,
  ): Promise<Omit<UserInterface, 'password'> | null> {
    const user = (
      await this.userService.getUsers({ name: username })
    )?.[0] as UserInterface;

    if (user && user.password === providedPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}
