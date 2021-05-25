import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [AuthModule, ChatModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
