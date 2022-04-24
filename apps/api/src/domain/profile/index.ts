import { readAll, readSingle } from "./routes/read";

import { Router } from "express";
import { authMiddleware } from "../auth/utils/token";
import { create } from "./routes/create";
import { del } from "./routes/delete";
import { update } from "./routes/update";

const profileRoutes = Router();

profileRoutes.post("/", authMiddleware, create);
profileRoutes.get("/", readAll);
profileRoutes.get("/:id", readSingle);
profileRoutes.patch("/:id", update);
profileRoutes.delete("/:id", del);

export { profileRoutes };
