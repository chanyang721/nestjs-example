import { Module }                 from "@nestjs/common";
import { ConfigModule }           from "@nestjs/config";
import { HealthCheckerModule }    from "./lib/health-checker/health-checker.module";
import { configOptions }          from "./lib/core-fundamental/options/config.options";
import { httpModuleAsyncOptions } from "./lib/core-fundamental/options/http.mudule.options";
import { DatabaseModule } from "./lib/database/database.module";
import { HttpModule }     from "./lib/http/http.module";
import { CatsModule }     from "./domain/cat/cats.module";



@Module({
  imports    : [
    /**
     * Core Libs Modules
     * */
    ConfigModule.forRoot(configOptions),
    HttpModule.registerAsync(httpModuleAsyncOptions),
    HealthCheckerModule,
    DatabaseModule,

    /**
     * Domain Modules
     * */


    /**
     * Test Modules
     * */
    CatsModule
  ],
  controllers: [],
  providers  : []
})
export class AppModule {
}
