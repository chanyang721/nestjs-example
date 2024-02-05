import { NestInterceptor } from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import { ResponseInterceptor } from './response/response.interceptor';



export const globalInterceptors: NestInterceptor[] = [
  // new LoggingInterceptor(),
  new ResponseInterceptor(),
];