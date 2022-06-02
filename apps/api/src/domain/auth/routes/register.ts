import { Request, Response } from "express";

import { UserModel } from "../data/schema";
import { generateHashedPassword } from "../utils/password";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    let foundUser = await UserModel.findOne({ email });
    if (foundUser) {
      return res.status(403).send("");
    }

    const newUser = new UserModel({
      email,
      password: generateHashedPassword(password),
      active: "inactive",
    });

    await newUser.save();

    return res.status(200).send("");
  } catch (e) {
    return res.status(500).send(e);
  }
};
