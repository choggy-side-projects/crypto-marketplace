import { Request, Response } from "express";

import { IUser } from "../../auth/data/schema";
import { ProfileModel } from "../data/schema";

export const del = async (req: Request, res: Response) => {
  try {
    const id = (req.user as IUser).id;

    await ProfileModel.deleteOne({ id });

    res.status(200).send("");
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
