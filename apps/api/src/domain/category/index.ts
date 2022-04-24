import { authMiddleware, roleMiddleware } from "../auth/utils/token";
import { readAll, readSingle } from "./routes/read";

import { Router } from "express";
import { create } from "./routes/create";
import { del } from "./routes/delete";
import { update } from "./routes/update";

const categoryRoutes = Router();

categoryRoutes.post(
  "/",
  authMiddleware,
  (req, res, next) => roleMiddleware(req, res, next, ["admin"]),
  create
);
categoryRoutes.get("/", readAll);
categoryRoutes.get("/:id", readSingle);
categoryRoutes.patch(
  "/:id",
  authMiddleware,
  (req, res, next) => roleMiddleware(req, res, next, ["admin"]),
  update
);
categoryRoutes.delete(
  "/:id",
  authMiddleware,
  (req, res, next) => roleMiddleware(req, res, next, ["admin"]),
  del
);

export { categoryRoutes };
