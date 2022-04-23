import { Request, Response } from "express";

import { ProfileModel } from "../data/schema";

export const readAll = async (req: Request, res: Response) => {
  try {
    const profiles = await ProfileModel.find({});
    res.status(200).json({ profiles });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export const readSingle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await ProfileModel.findOne({ _id: id });
    res.status(200).json({ profile });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
