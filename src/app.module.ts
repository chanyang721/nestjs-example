import { Logger, MiddlewareConsumer, Module } from "@nestjs/common";
import { ConfigModule }                       from "@nestjs/config";
import { ScheduleModule }             from "@nestjs/schedule";
import { BlockchainsModule }          from "./domains/blockchains/blockchains.module";
import { BoardsModule }               from "./domains/boards/boards.module";
import { UserModule }                 from "./domains/users/user.module";
import { AuthModule }                 from "./libs/authentication/auth.module";
import { RedisCacheModule }           from "./libs/cache/cache.module";
import { configOptions }              from "./libs/config/environment.config";
import { DatabaseModule }             from "./libs/database/database.module";
import { LoggerMiddleware }           from "./libs/fundamentals/middlewares/logger.middleware";
import { HealthCheckerModule }        from "./libs/helpers/health-checker/health-checker.module";
import { HttpModule }                 from "./libs/infra/http/http.module";
import { httpModuleAsyncOptions }     from "./libs/infra/http/options/http.mudule.options";



@Module( {
    imports: [
        /**
         * Core Libs Modules
         */
        ConfigModule.forRoot( configOptions ),
        HttpModule.registerAsync( httpModuleAsyncOptions ),
        ScheduleModule.forRoot(),
        HealthCheckerModule,
        RedisCacheModule,
        DatabaseModule,
        AuthModule,
        
        /**
         * Domain Modules
         */
        UserModule,
        BoardsModule,
        BlockchainsModule
    ],
    providers: [Logger]
} )
export class AppModule {
    configure( consumer: MiddlewareConsumer ) {
        consumer.apply( LoggerMiddleware )
                .forRoutes( "*" );
    }
}
