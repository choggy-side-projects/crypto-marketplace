import { Schema, model } from "mongoose";

interface IUser {
  email: string;
  password: string;
  active: "active" | "inactive" | "disabled";
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  active: { type: String, required: true },
});

export const UserModel = model<IUser>("User", userSchema);
