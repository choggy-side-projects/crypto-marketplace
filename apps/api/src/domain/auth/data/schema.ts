import { Schema, model } from "mongoose";

interface IUser {
  email: string;
  password: string;
  active: "active" | "inactive" | "disabled";
  roles: string[];
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  active: { type: String, required: true },
  roles: [{ type: String, required: true, default: [] }],
});

export const UserModel = model<IUser>("User", userSchema);
