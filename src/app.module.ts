import { Module }                 from "@nestjs/common";
import { ConfigModule }           from "@nestjs/config";
import { BlockchainsModule }      from "./domains/blockchains/blockchains.module";
import { BoardsModule }           from "./domains/boards/boards.module";
import { PostsModule }            from "./domains/boards/posts/posts.module";
import { ProjectModule }          from "./domains/boards/projects/project.module";
import { EcrfModule }             from "./domains/ecrfs/ecrf.module";
import { UserModule }             from "./domains/users/user.module";
import { AuthModule }             from "./libs/authentication/auth.module";
import { RedisCacheModule }       from "./libs/cache/cache.module";
import { DatabaseModule }         from "./libs/database/database.module";
import { HealthCheckerModule }    from "./libs/helpers/health-checker/health-checker.module";
import { HttpModule }             from "./libs/infra/http/http.module";
import { httpModuleAsyncOptions } from "./libs/infra/http/options/http.mudule.options";



@Module( {
    imports    : [
        /**
         * Core Libs Modules
         */
        ConfigModule.forRoot( { isGlobal: true } ),
        HttpModule.registerAsync( httpModuleAsyncOptions ),
        HealthCheckerModule,
        RedisCacheModule,
        DatabaseModule,
        AuthModule,
        
        /**
         * Domain Modules
         */
        UserModule,
        BoardsModule,
        BlockchainsModule,
        EcrfModule
    ],
    controllers: [],
    providers  : []
} )
export class AppModule {
}
