import { Module } from '@nestjs/common';
import { MongoModule } from 'src/mongo/mongo.module';
import { TicTacToeController } from './ticTacToe.controller';
import { TicTacToeGateway } from './ticTacToe.gateway';
import { TicTacToeService } from './ticTacToe.service';

@Module({
  imports: [MongoModule],
  controllers: [TicTacToeController],
  providers: [TicTacToeService, TicTacToeGateway],
})
export class TicTacToeModule {}
