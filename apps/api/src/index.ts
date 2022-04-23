import "dotenv/config";

import { authRoutes } from "./domain/auth";
import bodyParser from "body-parser";
import { database } from "./services/mongodb";
import express from "express";
import { profileRoutes } from "./domain/profile";

database.then(() => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Resource routes setup
  app.use("/auth", authRoutes);
  app.use("/profile", profileRoutes);

  app.listen(4000, () => console.log("Server started"));
});
