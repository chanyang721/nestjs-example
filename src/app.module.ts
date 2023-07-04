import { Module }                        from "@nestjs/common";
import { ConfigModule }                  from "@nestjs/config";
import { APP_INTERCEPTOR }               from "@nestjs/core";
import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { HttpModule }              from "./lib/shared/http/http.module";
import { configOptions }           from "./lib/core-fundamental/options/config.options";
import { cacheModuleAsyncOptions } from "./lib/core-fundamental/options/cache.module.options";
import { httpModuleAsyncOptions }  from "./lib/core-fundamental/options/http.mudule.options";
import { HealthCheckerModule }     from "./lib/health-checker/health-checker.module";
import { DatabaseModule }                from "./lib/database/database.module";
import { CatsModule }                    from "./domain/cat/cats.module";



@Module({
  imports    : [
    /**
     * Core Libs Modules
     * */
    ConfigModule.forRoot(configOptions), CacheModule.registerAsync(cacheModuleAsyncOptions),
    HttpModule.registerAsync(httpModuleAsyncOptions), HealthCheckerModule, DatabaseModule,

    /**
     * Domain Modules
     * */


    /**
     * Test Modules
     * */
    CatsModule
  ],
  controllers: [],
  providers  : [
    {
      provide : APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class AppModule {
}
