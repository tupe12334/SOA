import {
  Global,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { glob } from 'glob';
import * as mongoose from 'mongoose';

@Global()
@Injectable()
export class MongoService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    try {
      const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/TTT?authSource=admin`;
      console.log(url);
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
      });
      glob(`${__dirname}/**/models/*.js`, {}, function (er, files) {
        files.forEach((file) => {
          require(file);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  async onModuleDestroy() {
    await mongoose.disconnect();
  }
}
