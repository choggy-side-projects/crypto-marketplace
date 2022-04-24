import { Request, Response } from "express";

import { CategoryModel } from "../data/schema";

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { key, name } = req.body;
    const category = await CategoryModel.findOne({
      id,
    });

    if (!category) {
      return res.status(404).send("");
    }

    category.key = key;
    category.name = name;

    await category.save();

    return res.status(200).json({ category });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
