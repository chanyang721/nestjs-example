import { NestInterceptor } from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import { ResponseInterceptor } from './response/response.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const reflector = new Reflector();

export const globalInterceptors: NestInterceptor[] = [
  // new LoggingInterceptor(),
  new ResponseInterceptor(),
  new ClassSerializerInterceptor(reflector),
];
