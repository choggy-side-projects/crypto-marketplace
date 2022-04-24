import { NextFunction, Request, Response } from "express";

import { IUser } from "../data/schema";

export const roleMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  roles: string[]
) => {
  if (roles.every((role) => (req.user as IUser).roles.includes(role))) {
    next();
  } else {
    return res.status(401).send("");
  }
};
