import { Request, Response } from "express";

import { ProfileModel } from "../data/schema";

export const create = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, avatar } = req.body;
    const existing = await ProfileModel.findOne({
      userId: req.user,
    });

    if (!existing) {
      const profile = new ProfileModel({
        firstName,
        lastName,
        avatar,
        userId: req.user,
      });

      await profile.save();

      return res.status(200).json({ profile });
    }

    return res
      .status(404)
      .json({ message: "A profile exist for the current user" });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
