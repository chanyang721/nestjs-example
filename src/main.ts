import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory }            from '@nestjs/core';
import { AppModule }              from './app.module';
import * as cookieParser          from "cookie-parser";
import * as compression           from 'compression';
import helmet               from 'helmet'
import { coreFundamentals } from "./lib/core-fundamental";
import { setupSwagger }     from "./lib/swagger";
import { corsOptions }      from "./lib/core-fundamental/options/cors.options";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.enableCors(corsOptions);

  app.use(helmet());

  app.use(cookieParser());

  app.use(compression());

  await coreFundamentals(app)

  await setupSwagger(app)

  await app.listen(process.env.PORT);

  console.info(`Server is running on: ${await app.getUrl()}`);

  return app;
}

void bootstrap();
