import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log(request);
    return this.validateRequest(request);
  }

  private validateRequest(request: Request) {
    return true; // 인증/인가에 적합하지 않으면 false를 돌려주면 된다.
  }
}
