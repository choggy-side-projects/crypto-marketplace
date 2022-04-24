import { Request, Response } from "express";

import { CategoryModel } from "../data/schema";

export const create = async (req: Request, res: Response) => {
  try {
    const { key, name } = req.body;

    const category = new CategoryModel({
      key,
      name,
    });

    await category.save();

    return res.status(200).json({ category });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
