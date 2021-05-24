import { Module } from '@nestjs/common';
import { TicTacToeService } from './ticTacToe.service';

@Module({
  providers: [TicTacToeService],
})
export class TicTacToeModule {}
