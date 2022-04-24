import { Request, Response } from "express";

import { CategoryModel } from "../data/schema";

export const readAll = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find({});
    res.status(200).json({ categories });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export const readSingle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findOne({ id });
    res.status(200).json({ category });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
