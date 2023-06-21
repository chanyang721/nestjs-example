import { NestExpressApplication } from "@nestjs/platform-express";
import { RequestMethod }          from "@nestjs/common";



export const coreFundamentals = async( app: NestExpressApplication ): Promise<void> => {

  app.setGlobalPrefix("api", {
    exclude: [
      {
        path  : "/health-checker",
        method: RequestMethod.GET
      }
    ]
  });

};