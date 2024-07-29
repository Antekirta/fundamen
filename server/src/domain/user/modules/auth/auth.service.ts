import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import {
  UserInterface,
  UserSecureInterface,
} from '../../user.interface.domain';
import { JwtService } from '@nestjs/jwt';
import { isMatch } from '../../user.utils.domain';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    providedPassword: string,
  ): Promise<UserSecureInterface | null> {
    const user = (
      await this.userService.getUsers({ name: username })
    )?.[0] as UserInterface;

    if (user && (await isMatch(providedPassword, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  login(user: UserSecureInterface) {
    const payload = { username: user.name, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
