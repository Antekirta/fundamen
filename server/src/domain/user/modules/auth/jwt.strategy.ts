import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './auth.registry';
import { UserSecureInterface } from '../../user.interface.domain';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: {
    username: string;
    sub: number;
  }): Pick<UserSecureInterface, 'name' | 'id'> {
    return { name: payload.username, id: payload.sub };
  }
}
