import { Document, model, Schema, Types } from 'mongoose';
import { IUser } from './User';

export enum Players {
  X = 'X',
  O = 'O',
}

export interface IGame {
  openUser: Types.ObjectId | IUser;
  joinUser?: Types.ObjectId | IUser | null;
  board: string[];
  winer: Types.ObjectId;
  closed: boolean;
}

export interface IGameDoc extends IGame, Document {}
export const gameFields: Record<keyof IGame, any> = {
  openUser: { type: Schema.Types.ObjectId, ref: 'user' },
  joinUser: { type: Schema.Types.ObjectId, ref: 'user' },
  winer: { type: Schema.Types.ObjectId, ref: 'user' },
  board: {
    type: [String],
    unique: false,
    required: true,
    default: ['', '', '', '', '', '', '', '', ''],
  },
  closed: { type: Boolean, default: false, required: true },
};
const gameSchema = new Schema(gameFields);
export const gameModel = model<IGameDoc>('Game', gameSchema);
