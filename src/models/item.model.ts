import { Document, Schema, model } from 'mongoose';

export interface Item extends Document {
  name: string;
  date?: Date;
}

export const ItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    collection: 'items'
  }
);

export default model<Item>('Item', ItemSchema);
