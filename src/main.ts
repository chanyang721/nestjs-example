import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory }            from '@nestjs/core';
import { AppModule }              from './app.module';
import * as cookieParser          from "cookie-parser";
import * as compression           from 'compression';
import helmet                     from 'helmet'
import { coreFundamentals }       from "./fundamentals";
import { setupSwagger }           from "./common/swagger";
import { corsOptions }            from "./fundamentals/options/cors.options";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.enableCors(corsOptions); // CORS 설정

  app.use(helmet()); // Helmet 설정

  app.use(cookieParser()); // 쿠키 설정

  app.use(compression()); // Response 파일 압축

  await coreFundamentals(app) // 기본 설정

  await app.listen(process.env.PORT); // 서버 실행

  console.info(`Server is running on: ${await app.getUrl()}`);

  await setupSwagger(app) // Swagger 설정

  return app;
}

void bootstrap();
