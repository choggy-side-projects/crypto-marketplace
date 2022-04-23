import { Request, Response } from "express";

import { ProfileModel } from "../data/schema";

export const del = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await ProfileModel.deleteOne({ _id: id });

    res.status(200).send("");
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
