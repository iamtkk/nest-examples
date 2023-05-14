import { Inject } from '@nestjs/common';
import { ServiceA } from './service-A';

export class BaseService {
  // constructor(private readonly serviceA: ServiceA) {}
  @Inject(ServiceA) private readonly serviceA: ServiceA;

  getHello(): string {
    return 'Hello World Base!';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}
