import { readAll, readSingle } from "./routes/read";

import { Router } from "express";
import { authMiddleware } from "../auth/utils/token";
import { create } from "./routes/create";
import { del } from "./routes/delete";
import { roleMiddleware } from "../auth/utils/middleware";
import { update } from "./routes/update";

const profileRoutes = Router();

profileRoutes.post("/", authMiddleware, create);
profileRoutes.get(
  "/",
  authMiddleware,
  (req, res, next) => roleMiddleware(req, res, next, ["admin"]),
  readAll
);
profileRoutes.get("/:id", readSingle);
profileRoutes.patch("/:id", authMiddleware, update);
profileRoutes.delete("/:id", authMiddleware, del);

export { profileRoutes };
