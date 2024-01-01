import { ConfigModule, ConfigService }  from "@nestjs/config";
import { TypeOrmModuleAsyncOptions }    from "@nestjs/typeorm";
import { ContractApplication }          from "../../../../../domains/blockchains/contracts/entities/contract-application.entity";
import { Contract }                     from "../../../../../domains/blockchains/contracts/entities/contract.entity";
import { FunctionSignature }            from "../../../../../domains/blockchains/contracts/entities/function-signature.entity";
import { RelContractFunctionSignature } from "../../../../../domains/blockchains/contracts/entities/rel-contract-function_signature.entity";
import { TermsAgreementSub }            from "../../../../../domains/blockchains/contracts/entities/terms-agreement-sub.entity";
import { TermsAgreement }               from "../../../../../domains/blockchains/contracts/entities/terms-agreement.entity";
import { Token }                        from "../../../../../domains/blockchains/contracts/entities/token.entity";
import { Dapp }                         from "../../../../../domains/blockchains/dapp/entities/dapp.entity";
import { DappApplication }              from "../../../../../domains/blockchains/dapp/entities/dapp_application.entity";
import { Transaction }                  from "../../../../../domains/blockchains/transactions/entities/transaction.entity";
import { Account }                      from "../../../../../domains/blockchains/wallets/entities/account.entity";
import { RelWalletAccount }             from "../../../../../domains/blockchains/wallets/entities/rel-wallet-account.entity";
import { Wallet }                       from "../../../../../domains/blockchains/wallets/entities/wallet.entity";
import { CommentsEntity }               from "../../../../../domains/boards/posts/infrastructrue/entities/comments.entity";
import { PostsEntity }                  from "../../../../../domains/boards/posts/infrastructrue/entities/posts.entity";
import { FileEntity }                   from "../../../../../domains/boards/projects/infrastructure/entities/file.entity";
import { GroupEntity }                  from "../../../../../domains/boards/projects/infrastructure/entities/group.entity";
import { ProjectEntity }                from "../../../../../domains/boards/projects/infrastructure/entities/project.entity";
import { ProfileEntity }                from "../../../../../domains/users/infrastructure/entities/profile.entity";
import { UserEntity }                   from "../../../../../domains/users/infrastructure/entities/user.entity";
import { AuthEntity }                   from "../../../../authentication/infrastructure/entities/auth.entity";
import { PRODUCTION }                   from "../../../../utils/constants";
import { SqlLogger }                    from "./typeorm.logger.options";



export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
    imports   : [ ConfigModule ],
    inject    : [ ConfigService ],
    useFactory: ( configService: ConfigService ) => ( {
        type       : "mysql",
        host       : configService.get<string>( "DB_CONTAINER_HOST" ),
        port       : configService.get<number>( "DB_PORT" ),
        username   : configService.get<string>( "DB_USER" ),
        password   : configService.get<string>( "DB_PASSWORD" ),
        database   : configService.get<string>( "DB_DATABASE_BOARD" ),
        timezone   : "Z",
        synchronize: process.env.NODE_ENV !== PRODUCTION,
        // logging    : process.env.NODE_ENV !== PRODUCTION,
        // logger     : new SqlLogger(),
        entities   : [
            AuthEntity,
            UserEntity, ProfileEntity
        ]
    } )
};

export const boardTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
    imports   : [ ConfigModule ],
    inject    : [ ConfigService ],
    useFactory: ( configService: ConfigService ) => ( {
        type       : "mysql",
        host       : configService.get<string>( "DB_CONTAINER_HOST" ),
        port       : configService.get<number>( "DB_PORT" ),
        username   : configService.get<string>( "DB_USER" ),
        password   : configService.get<string>( "DB_PASSWORD" ),
        database   : configService.get<string>( "DB_DATABASE_BOARD" ),
        timezone   : "Z",
        synchronize: process.env.NODE_ENV !== PRODUCTION,
        // logging    : process.env.NODE_ENV !== PRODUCTION,
        // logger     : new SqlLogger(),
        entities   : [
            PostsEntity, CommentsEntity,
            
            ProjectEntity, GroupEntity, FileEntity
        ]
    } )
};


export const dAppTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
    imports   : [ ConfigModule ],
    inject    : [ ConfigService ],
    useFactory: ( configService: ConfigService ) => ( {
        type       : "mysql",
        host       : configService.get<string>( "DB_CONTAINER_HOST" ),
        port       : configService.get<number>( "DB_PORT" ),
        username   : configService.get<string>( "DB_USER" ),
        password   : configService.get<string>( "DB_PASSWORD" ),
        database   : configService.get<string>( "DB_DATABASE_DAPP" ),
        timezone   : configService.get<string>( "DB_TIMEZONE" ),
        synchronize: process.env.NODE_ENV !== PRODUCTION,
        // logging    : process.env.NODE_ENV !== PRODUCTION,
        // logger     : new SqlLogger(),
        entities   : [
            Wallet, RelWalletAccount, Account,
            
            Dapp, DappApplication,
            
            Contract, ContractApplication,
            TermsAgreement, TermsAgreementSub,
            RelContractFunctionSignature, FunctionSignature,
            
            Token,
            
            Transaction
        ]
    } )
};