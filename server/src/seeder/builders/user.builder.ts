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
        user_type: userTypesIds[USER_TYPES.SUPERADMIN],
        email: '',
        password: 'superadminpass',
        created_date: `${new Date()}`,
      },
      {
        name: 'Admin',
        user_type: userTypesIds[USER_TYPES.ADMIN],
        email: '',
        password: 'adminpass',
        created_date: `${new Date()}`,
      },
      {
        name: 'Client',
        user_type: userTypesIds[USER_TYPES.CLIENT],
        email: '',
        password: 'clientpass',
        created_date: `${new Date()}`,
      },
    ];
  }
}
