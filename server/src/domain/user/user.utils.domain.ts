import * as bcrypt from 'bcrypt';

export const hashPassword = async (
  password: string,
  { saltOrRounds = 10 } = {},
) => {
  return await bcrypt.hash(password, saltOrRounds);
};

export const isMatch = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
