import { Injectable } from '@nestjs/common';

// function deco(target: any, propertyKey: string, description: PropertyDescriptor) {
//   console.log('데커레이터가 평가됨')
// }

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T){
  return class extends constructor {
    reportingURL = "http://www.example.com";
  }
}

@Injectable()
export class TestService {
  // @deco
  test() {
    console.log('함수 호출됨')
  }
}

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug);