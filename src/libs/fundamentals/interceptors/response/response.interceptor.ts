import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { IResponse } from './dto/response.dto';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ResponseInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response: IResponse<any>) => {
        return {
          statusCode: response.statusCode,
          message: response?.message,
          data: response.data,
        };
      }),
    );
  }
}
