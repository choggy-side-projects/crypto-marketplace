import "dotenv/config";

import { authRoutes } from "./domain/auth";
import bodyParser from "body-parser";
import { categoryRoutes } from "./domain/category";
import cors from "cors";
import { database } from "./services/mongodb";
import express from "express";
import { profileRoutes } from "./domain/profile";

database.then(() => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Resource routes setup
  app.use("/auth", authRoutes);
  app.use("/profile", profileRoutes);
  app.use("/category", categoryRoutes);

  app.listen(4000, () => console.log("Server started"));
});
