import { Controller, Get } from '@nestjs/common';
import { TestService } from './app.testService'

@Controller()
export class AppTestController {
  constructor(private readonly testService: TestService) {}

  @Get('test')
  getTest() {
    return this.testService.test();
  }
}
