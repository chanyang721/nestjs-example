import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory }            from '@nestjs/core';
import { AppModule }              from './app.module';
import * as cookieParser          from "cookie-parser";
import * as compression           from 'compression';
import helmet                     from 'helmet'
import { coreFundamentals }       from "./fundamentals";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin     : true, //TODO 도메인 수정
    methods    : [ "GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS" ],
    maxAge     : 3600 * 5,
    credentials: true
  }); // CORS 설정

  app.use(helmet()); // Helmet 설정

  app.use(cookieParser()); // 쿠키 설정

  app.use(compression());

  await coreFundamentals(app); // NestJS Core 설정

  await app.listen(3000);
}

void bootstrap();
