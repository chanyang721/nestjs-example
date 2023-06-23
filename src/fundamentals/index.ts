import { NestExpressApplication } from "@nestjs/platform-express";
import { globalInterceptors }     from "./interceptors";
import { globalGuards }           from "./guards";
import { globalPipes }            from "./pipes";
import { globalExceptionFilters } from "./filters";
import { RequestMethod }          from "@nestjs/common";



export const coreFundamentals = async( app: NestExpressApplication ) => {
  // app.use() // 글로벌 미들웨어 설정

  app.useGlobalGuards(...globalGuards);

  app.useGlobalInterceptors(...globalInterceptors);

  app.useGlobalPipes(...globalPipes);

  app.useGlobalFilters(...globalExceptionFilters);


  /**
   *
   * */
  app.setGlobalPrefix("api", {
    exclude: [
      {
        path  : "/health-checker",
        method: RequestMethod.GET
      }
    ]
  });

};