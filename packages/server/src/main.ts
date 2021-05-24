import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, async () => {
    console.log(`listen in http://localhost:${process.env.PORT}`);
  });
}
bootstrap();
