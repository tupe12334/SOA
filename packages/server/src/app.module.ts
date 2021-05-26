import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { MongoModule } from './mongo/mongo.module';
import { TicTacToeModule } from './ticTacToe/ticTacToe.module';

@Module({
  imports: [AuthModule, ChatModule, MongoModule, TicTacToeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
