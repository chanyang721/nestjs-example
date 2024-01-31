import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import {
    ApplicationFormContractAudit
} from "../../../../../domains/blockchains/applicationForms/entities/application.form.contract.audits.entity";
import {
    ApplicationFormContract
} from "../../../../../domains/blockchains/applicationForms/entities/application.form.contract.entity";
import {
    ApplicationFormContractFunctionSignature
} from "../../../../../domains/blockchains/applicationForms/entities/application.form.contract.function.signature.entity";
import {
    ApplicationFormDapp
} from "../../../../../domains/blockchains/applicationForms/entities/application.form.dapp.entity";
import { ApplicationForm } from "../../../../../domains/blockchains/applicationForms/entities/application.form.entity";
import {
    ApplicationFormTermsAgreement
} from "../../../../../domains/blockchains/applicationForms/entities/application.form.terms.agreement.entity";
import {
    ApplicationFormProcessLog
} from "../../../../../domains/blockchains/applicationForms/entities/application.from.process.log.entity";
import {
    FunctionSignature
} from "../../../../../domains/blockchains/contracts/entities/contract-function-signature.entity";
import { Contract } from "../../../../../domains/blockchains/contracts/entities/contract.entity";
import {
    RelContractFunctionSignature
} from "../../../../../domains/blockchains/contracts/entities/rel-contract-function_signature.entity";
import { Token } from "../../../../../domains/blockchains/contracts/entities/token.entity";
import { Dapp } from "../../../../../domains/blockchains/dapp/entities/dapp.entity";
import { RewardPolicy } from "../../../../../domains/blockchains/rewards/entities/reward-policy.entity";
import { Reward } from "../../../../../domains/blockchains/rewards/entities/reward.entity";
import { RewardHistory } from "../../../../../domains/blockchains/rewards/entities/reward_history.entity";
import { Transaction } from "../../../../../domains/blockchains/transactions/entities/transaction.entity";
import { Account } from "../../../../../domains/blockchains/wallets/entities/account.entity";
import { RelWalletAccount } from "../../../../../domains/blockchains/wallets/entities/rel-wallet-account.entity";
import { Wallet } from "../../../../../domains/blockchains/wallets/entities/wallet.entity";
import { CommentsEntity } from "../../../../../domains/boards/posts/infrastructrue/entities/comments.entity";
import { PostsEntity } from "../../../../../domains/boards/posts/infrastructrue/entities/posts.entity";
import { FileEntity } from "../../../../../domains/boards/projects/infrastructure/entities/file.entity";
import { GroupEntity } from "../../../../../domains/boards/projects/infrastructure/entities/group.entity";
import { ProjectEntity } from "../../../../../domains/boards/projects/infrastructure/entities/project.entity";
import { ProfileEntity } from "../../../../../domains/users/infrastructure/entities/profile.entity";
import { UserEntity } from "../../../../../domains/users/infrastructure/entities/user.entity";
import { AuthEntity } from "../../../../authentication/infrastructure/entities/auth.entity";
import { PRODUCTION } from "../../../../utils/constants";



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
        entities: [
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
        entities: [
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
        entities: [
            Transaction,
            
            Wallet,
            RelWalletAccount, Account,
            
            Dapp,
            
            Contract, Token,
            RelContractFunctionSignature, FunctionSignature,
            
            ApplicationForm,
            ApplicationFormDapp,
            ApplicationFormContract,
            ApplicationFormContractAudit,
            ApplicationFormContractFunctionSignature,
            ApplicationFormProcessLog,
            ApplicationFormTermsAgreement,
            
            Reward,
            RewardPolicy,
            RewardHistory
        ]
    } )
};