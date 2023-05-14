import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TestService } from './app.testService';

@Controller()
export class AppTestController {
  constructor(private readonly testService: TestService) {}

  @Get('test')
  getTest() {
    return this.testService.test();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.testService.findOne(+id);
  }

  @Get()
  findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) id: number,
  ) {
    return this.testService.findAll(id, offset);
  }
}
