import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppTestController } from './app.testController';
import { AppService } from './app.service';
import { TestService } from './app.testService';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { UsersService } from './users-service/users-service';
import { ServiceB } from './users-service/service-B';
import { ServiceA } from './users-service/service-A';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './logger/logger.middleware';
import { Logger2Middleware } from './logger/logger2.middleware';
import { UsersController } from './users/users.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'stage'
          ? '.stage.env'
          : '.development.env',
    }),
  ],
  controllers: [ApiController, AppController, AppTestController],
  providers: [
    AppService,
    TestService,
    UsersService,
    ServiceB,
    ServiceA,
    { provide: APP_GUARD, useClass: AuthGuard }, // 가드를 프로바이더에 주입해서 사용하고 싶으면 커스텀 프로바이더로 선언해야 한다.
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // consumer.apply(LoggerMiddleware, Logger2Middleware).forRoutes('/users');
    consumer
      .apply(LoggerMiddleware, Logger2Middleware)
      .exclude({ path: '/users', method: RequestMethod.GET })
      .forRoutes(UsersController);
  }
}
// export class AppModule {}
