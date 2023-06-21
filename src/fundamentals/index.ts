import { NestExpressApplication } from "@nestjs/platform-express";
import { RequestMethod }          from "@nestjs/common";
import { AllExceptionsFilter }    from "./filters/global.exception.filter";
import { HttpAdapterHost }        from "@nestjs/core";



export const coreFundamentals = async( app: NestExpressApplication ): Promise<void> => {
  const { httpAdapter } = app.get(HttpAdapterHost);


  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));


  app.setGlobalPrefix("api", {
    exclude: [
      {
        path  : "/health-checker",
        method: RequestMethod.GET
      }
    ]
  });

};