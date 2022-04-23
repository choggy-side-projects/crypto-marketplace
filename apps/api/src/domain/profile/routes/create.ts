import { Request, Response } from "express";

import { ProfileModel } from "../data/schema";

export const create = async (req: Request, res: Response) => {
  try {
    const userId = "1234-1234-1234-1234";
    const { firstName, lastName } = req.body;

    const existing = await ProfileModel.findOne({ userId });

    if (!existing) {
      const profile = new ProfileModel({
        firstName,
        lastName,
        userId,
      });

      await profile.save();

      res.status(200).json({ profile });
    }

    res.status(404).json({ message: "A profile exist for the current user" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
