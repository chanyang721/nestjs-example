import { Module }                 from "@nestjs/common";
import { ConfigModule }           from "@nestjs/config";
import { PostsModule }            from "./domain/posts/posts.module";
import { ProjectModule }          from "./domain/projects/project.module";
import { UserModule }             from "./domain/users/user.module";
import { AuthModule }             from "./libs/authentication/auth.module";
import { RedisCacheModule }       from "./libs/cache/cache.module";
import { DatabaseModule }         from "./libs/database/database.module";
import { HealthCheckerModule }    from "./libs/helpers/health-checker/health-checker.module";
import { HttpModule }             from "./libs/infra/http/http.module";
import { httpModuleAsyncOptions } from "./libs/infra/http/options/http.mudule.options";
import { TransactionsModule } from './transactions/transactions.module';
import { ContractsModule }    from './domain/wallets/contracts/contracts.module';
import { RewardsModule }      from './rewards/rewards.module';
import { WalletsModule }          from './domain/wallets/wallets.module';



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
        UserModule, // users
        ProjectModule, // projects
        PostsModule, WalletsModule, TransactionsModule, ContractsModule, RewardsModule // boards
    ],
    controllers: [],
    providers  : []
} )
export class AppModule {
}
