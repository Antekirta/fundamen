import * as bcrypt from 'bcrypt';

export const hashPassword = async (
  password: string,
  { saltOrRounds = 10 } = {},
) => {
  return await bcrypt.hash(password, saltOrRounds);
};
