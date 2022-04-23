import mongoose from "mongoose";

export const database = mongoose.connect(process.env.DATABASE_URL);
