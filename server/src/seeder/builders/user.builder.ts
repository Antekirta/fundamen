import {
  UserToAddInterface,
  UserTypeInterface,
  UserTypeToAddInterface,
} from '../../domain/user/user.interface.domain';
import { USER_TYPES } from '../../domain/user/user.domain.registry';

export class UserBuilder {
  userTypes: UserTypeInterface[] = [];

  buildUserTypes(): UserTypeToAddInterface[] {
    return Object.values(USER_TYPES).map((name) => ({ name }));
  }

  private buildEmail() {
    return `${Math.random().toString(12).substring(2, 10)}@gmail.com`;
  }

  buildUsers(): UserToAddInterface[] {
    if (!this.userTypes || !this.userTypes.length) {
      throw new Error('User types are not initialized');
    }

    const userTypesIds = {
      [USER_TYPES.SUPERADMIN]: this.userTypes.find(
        (row) => row.name === USER_TYPES.SUPERADMIN,
      ).id,
      [USER_TYPES.ADMIN]: this.userTypes.find(
        (row) => row.name === USER_TYPES.ADMIN,
      ).id,
      [USER_TYPES.CLIENT]: this.userTypes.find(
        (row) => row.name === USER_TYPES.CLIENT,
      ).id,
    };

    return [
      {
        name: 'Superadmin',
        first_name: 'Superadmin',
        last_name: 'Superadmin',
        user_type: userTypesIds[USER_TYPES.SUPERADMIN],
        email: this.buildEmail(),
        password: 'pass',
        created_date: `${new Date()}`,
      },
      {
        name: 'Admin',
        first_name: 'Admin',
        last_name: 'Admin',
        user_type: userTypesIds[USER_TYPES.ADMIN],
        email: this.buildEmail(),
        password: 'pass',
        created_date: `${new Date()}`,
      },
      {
        name: 'Client',
        first_name: 'Client',
        last_name: 'Client',
        user_type: userTypesIds[USER_TYPES.CLIENT],
        email: this.buildEmail(),
        password: 'pass',
        created_date: `${new Date()}`,
      },
    ];
  }
}
