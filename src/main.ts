import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger3 } from './logger/logger3.middleware';
import { AuthGuard } from './auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger3); // 전역에서 미들웨어를 사용. 함수형태의 미들웨어만 사용이 가능하다. (Class 불가)
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
