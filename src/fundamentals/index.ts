import { NestExpressApplication }        from "@nestjs/platform-express";
import { RequestMethod, ValidationPipe } from "@nestjs/common";
import { GlobalExceptionFilter }         from "./filters/global.exception.filter";
import { validationPipeOptions }         from "./pipes/global.validation.pipe";



export const coreFundamentals = async( app: NestExpressApplication ): Promise<void> => {

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions))

  app.useGlobalFilters(new GlobalExceptionFilter());

  app.setGlobalPrefix("api", {
    exclude: [
      {
        path  : "/health-checker",
        method: RequestMethod.GET
      }
    ]
  });

};