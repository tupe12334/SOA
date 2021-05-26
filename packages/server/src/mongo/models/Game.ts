import { Document, model, Schema, Types } from 'mongoose';
import { IUser } from './User';

export enum Players {
  X = 'X',
  O = 'O',
}

export interface IGame {
  openUser: Types.ObjectId | IUser;
  joinUser?: Types.ObjectId | IUser | null;
  A1: Players;
  A2: Players;
  A3: Players;
  B1: Players;
  B2: Players;
  B3: Players;
  C1: Players;
  C2: Players;
  C3: Players;
}

export interface IGameDoc extends IGame, Document {}
export const gameFilds: Record<keyof IGame, any> = {
  openUser: { type: Schema.Types.ObjectId, ref: 'user' },
  joinUser: { type: Schema.Types.ObjectId, ref: 'user' },
  A1: { type: Players, unique: true, required: true, default: '' },
  A2: { type: Players, unique: true, required: true, default: '' },
  A3: { type: Players, unique: true, required: true, default: '' },
  B1: { type: Players, unique: true, required: true, default: '' },
  B2: { type: Players, unique: true, required: true, default: '' },
  B3: { type: Players, unique: true, required: true, default: '' },
  C1: { type: Players, unique: true, required: true, default: '' },
  C2: { type: Players, unique: true, required: true, default: '' },
  C3: { type: Players, unique: true, required: true, default: '' },
};
const gameSchema = new Schema(gameFilds);
export const gameModel = model<IGameDoc>('Game', gameSchema);
