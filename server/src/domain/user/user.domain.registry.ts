enum TABLES {
  U = 'users',
  UT = 'user_types',
}

export const DB = {
  TABLES,
};

export const ROUTES = {
  AUTH: {
    BASE: 'auth',
    LOGIN: 'login',
    ROLE: 'role',
  },
  USERS: {
    BASE: 'users',
    ID: 'id',
    PASSWORD: 'password',
  },
  USER_TYPES: {
    BASE: 'user-types',
    ID: 'id',
  },
};

export const USER_TYPES = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  CLIENT: 'client',
};
