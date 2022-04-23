import { readAll, readSingle } from "./routes/read";

import { Router } from "express";
import { create } from "./routes/create";
import { del } from "./routes/delete";
import { update } from "./routes/update";

const profileRoutes = Router();

profileRoutes.post("/", create);
profileRoutes.get("/", readAll);
profileRoutes.get("/:id", readSingle);
profileRoutes.patch("/", update);
profileRoutes.delete("/:id", del);

export { profileRoutes };
