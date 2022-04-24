import { compareSync, genSaltSync, hashSync } from "bcrypt-nodejs";

export const generateHashedPassword = (password: string) => {
  return hashSync(password, genSaltSync(8));
};

export const checkPassword = (password: string, storedPassword: string) => {
  return compareSync(password, storedPassword);
};
