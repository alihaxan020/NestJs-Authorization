import * as bcrypt from 'bcrypt';
export function encodedPassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparedPassword(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}
