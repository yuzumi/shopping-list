import { Document, Schema, model } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
}

export const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

export default model<User>('User', UserSchema);
