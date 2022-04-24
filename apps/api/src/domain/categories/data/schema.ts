import { Schema, model } from "mongoose";

interface ICategory {
  key: string;
  name: string;
}

const categorySchema = new Schema<ICategory>({
  key: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export const CategoryModel = model<ICategory>("Category", categorySchema);
