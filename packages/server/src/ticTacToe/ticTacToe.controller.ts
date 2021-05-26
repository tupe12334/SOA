import { Body, Controller, Post } from '@nestjs/common';
import { IUser, userModel } from 'src/mongo/models/User';
import { MongoService } from 'src/mongo/mongo.service';
import { TicTacToeService } from './ticTacToe.service';

@Controller('game')
export class TicTacToeController {
  constructor(
    private ticTacToeService: TicTacToeService,
    private mongoService: MongoService,
  ) {}
  @Post('new')
  async newGame(@Body() body: { email: string }) {
    console.log(body);
    const user = await userModel.findOne({ email: body.email });
    return this.ticTacToeService.createRoom(user);
  }
}
