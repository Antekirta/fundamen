export interface UserInterface {
  id: number;
  name: string;
  user_type: number;
  email: string;
  password: string;
  created_date: string;
}

export interface UserToAddInterface extends Omit<UserInterface, 'id'> {}

export interface UserSecureInterface extends Omit<UserInterface, 'password'> {}

export interface UserTypeInterface {
  id: number;
  name: string;
}

export interface UserTypeToAddInterface extends Omit<UserTypeInterface, 'id'> {}
