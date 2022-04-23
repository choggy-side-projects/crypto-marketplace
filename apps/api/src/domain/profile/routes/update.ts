import { Request, Response } from "express";

export const update = (req: Request, res: Response) => {
  res.json({ message: "update" });
};
