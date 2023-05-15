import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './app.testService';
import { ServiceB } from './users-service/service-B';
import { ConfigService } from '@nestjs/config/dist';
import { AuthGuard } from './auth.guard';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(@Req() req: Request): string {
//     // console.log(req);
//     return this.appService.getHello();
//   }
// }
// @UseGuards(AuthGuard)
@Controller()
export class AppController {
  constructor(private readonly serviceB: ServiceB) {}

  // @UseGuards(AuthGuard)
  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello();
  }
}
