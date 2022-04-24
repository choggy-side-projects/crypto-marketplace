import { Request, Response } from "express";

import { IUser } from "../../auth/data/schema";
import { ProfileModel } from "../data/schema";

export const update = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, avatar } = req.body;
    const existing = await ProfileModel.findOne({
      userId: (req.user as IUser).id,
    });

    if (!existing) {
      return res.status(404).send("");
    }

    existing.firstName = firstName;
    existing.lastName = lastName;
    existing.avatar = avatar;

    await existing.save();

    return res.status(200).json({ profile: existing });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
