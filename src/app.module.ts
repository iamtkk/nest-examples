import { Module } from '@nestjs/common';
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
  providers: [AppService, TestService, UsersService, ServiceB, ServiceA],
})
export class AppModule {}
