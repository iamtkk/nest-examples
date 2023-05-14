import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './app.testService';
import { ServiceB } from './users-service/service-B';
import { ConfigService } from '@nestjs/config/dist';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(@Req() req: Request): string {
//     // console.log(req);
//     return this.appService.getHello();
//   }
// }
@Controller()
export class AppController {
  constructor(private readonly serviceB: ServiceB) {}

  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello();
  }
}
