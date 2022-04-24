import { Request, Response } from "express";

import { ProfileModel } from "../data/schema";

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, avatar } = req.body;
    const profile = await ProfileModel.findOne({
      id,
    });

    if (!profile) {
      return res.status(404).send("");
    }

    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.avatar = avatar;

    await profile.save();

    return res.status(200).json({ profile });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
