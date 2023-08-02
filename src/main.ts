import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory }            from "@nestjs/core";
import helmet                     from "helmet";
import compression                from "compression";
import cookieParser         from "cookie-parser";
import { coreFundamentals } from "./libs/core-fundamentals";
import { setupSwagger }     from "./libs/utils/swagger";
import { corsOptions }      from "./libs/core-fundamentals/options/cors.options";
import { AppModule }        from "./app.module";



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors(corsOptions);

  app.use(helmet());

  app.use(cookieParser());

  app.use(compression());

  await coreFundamentals(app);

  await setupSwagger(app);

  await app.listen(process.env.MAIN_SERVER_PORT);

  console.info(`Server is running on: ${await app.getUrl()}`);

  return app;
}

void bootstrap();
