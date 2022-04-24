import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";

export const generateToken = (user: any) => {
  return sign(
    {
      iss: "crypto-marketplace",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    process.env.TOKEN_SECRET
  );
};

export const verifyToken = (token: string): string | null => {
  const decoded = verify(token, process.env.TOKEN_SECRET);

  if (typeof decoded === "object") {
    return decoded.sub;
  }

  return null;
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedUserId = verifyToken(token);
    if (decodedUserId) {
      req.user = decodedUserId;
      next();
    } else {
      return res.status(401).send("");
    }
  } catch {
    return res.status(401).send("");
  }
};
