import { Schema, model } from "mongoose";

interface IProfile {
  firstName: string;
  lastName: string;
  userId: string;
}

const profileSchema = new Schema<IProfile>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userId: { type: String, required: true },
});

export const ProfileModel = model<IProfile>("Profile", profileSchema);
