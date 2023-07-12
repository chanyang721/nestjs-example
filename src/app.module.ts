import { Module }                 from "@nestjs/common";
import { ConfigModule }           from "@nestjs/config";
import { HealthCheckerModule }    from "./lib/utils/health-checker/health-checker.module";
import { configOptions }          from "./lib/core-fundamental/options/config.options";
import { httpModuleAsyncOptions } from "./lib/core-fundamental/options/http.mudule.options";
import { AuthModule }             from "./lib/authentication/auth.module";
import { DatabaseModule }         from "./lib/database/database.module";
import { HttpModule }             from "./lib/utils/http/http.module";
import { UserModule }             from "./domain/user/user.module";



@Module({
  imports    : [
    /**
     * Core Libs Modules
     * */
    ConfigModule.forRoot(configOptions),
    HttpModule.registerAsync(httpModuleAsyncOptions),
    HealthCheckerModule,
    DatabaseModule,
    AuthModule,

    /**
     * Domain Modules
     * */
    UserModule

  ],
  controllers: [],
  providers  : []
})
export class AppModule {
}
