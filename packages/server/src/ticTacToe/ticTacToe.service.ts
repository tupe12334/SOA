import { Injectable } from '@nestjs/common';
import { gameModel } from 'src/mongo/models/Game';
import { IUser, IUserDoc } from 'src/mongo/models/User';

@Injectable()
export class TicTacToeService {
  constructor() {}

  async createRoom(user: IUserDoc) {
    return user.email ? await gameModel.create({ openUser: user._id }) : null;
  }
}
