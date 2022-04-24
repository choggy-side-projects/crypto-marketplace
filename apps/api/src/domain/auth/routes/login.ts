import { Request, Response } from "express";

import { UserModel } from "../data/schema";
import { checkPassword } from "../utils/password";
import { generateToken } from "../utils/token";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && checkPassword(password, user.password)) {
    return res.status(200).json({
      token: generateToken(user),
    });
  }

  return res.status(401).send("");
};
