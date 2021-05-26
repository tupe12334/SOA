import mongoose, { Document, model, Schema } from 'mongoose';
export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IUserDoc extends IUser, Document {}
export const userFields: Record<keyof IUser, any> = {
  email: { type: String, unique: true, required: true },
  password: { type: String },
  name: { type: Schema.Types.String },
};
const userSchema = new Schema(userFields);
export const userModel = model<IUserDoc>('User', userSchema);
