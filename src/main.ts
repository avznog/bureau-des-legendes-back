import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.BASE_URL || 'http://localhost:3000', process.env.SOCKET_URL],
  });
  await app.listen(8000);
}
bootstrap();
