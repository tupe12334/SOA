import { Module } from '@nestjs/common';
import { TicTacToeGateway } from './ticTacToe.gateway';
import { TicTacToeService } from './ticTacToe.service';

@Module({
  imports: [],
  providers: [TicTacToeService, TicTacToeGateway],
})
export class TicTacToeModule {}
