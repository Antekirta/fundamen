export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  created_date: string;
}

export interface UserToAddInterface extends Omit<UserInterface, 'id'> {}

export interface UserSecureInterface extends Omit<UserInterface, 'password'> {}
