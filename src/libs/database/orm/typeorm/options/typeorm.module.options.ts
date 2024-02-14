import {
  ApplicationForm,
  ApplicationFormContract,
  ApplicationFormContractAudit,
  ApplicationFormContractFunctionSignature,
  ApplicationFormDapp,
  ApplicationFormProcessLog,
  ApplicationFormTermsAgreement,
} from 'src/domains/blockchains/applicationForms/infrasturcture/entities';
import {
  Contract,
  ContractFunctionSignature,
  RelContractFunctionSignature,
} from '@/blockchains/contracts/entities';
import { Token } from '@/blockchains/contracts/entities/token.entity';
import { Dapp } from '@/blockchains/dapp/entities/dapp.entity';
import { RewardPolicy } from '@/blockchains/rewards/entities/reward-policy.entity';
import { Reward } from '@/blockchains/rewards/entities/reward.entity';
import { RewardHistory } from '@/blockchains/rewards/entities/reward_history.entity';
import { Transaction } from '@/blockchains/transactions/entities/transaction.entity';
import { Account } from '@/blockchains/wallets/entities/account.entity';
import { RelWalletAccount } from '@/blockchains/wallets/entities/rel-wallet-account.entity';
import { Wallet } from '@/blockchains/wallets/entities/wallet.entity';
import { CommentsEntity } from '@/boards/posts/infrastructrue/entities/comments.entity';
import { PostsEntity } from '@/boards/posts/infrastructrue/entities/posts.entity';
import { FileEntity } from '@/boards/projects/infrastructure/entities/file.entity';
import { GroupEntity } from '@/boards/projects/infrastructure/entities/group.entity';
import { ProjectEntity } from '@/boards/projects/infrastructure/entities/project.entity';
import { AuthEntity } from '@/libs/authentication/infrastructure/entities/auth.entity';
import { PRODUCTION } from '@/libs/utils/constants';
import { ProfileEntity, UserEntity } from '@/users/infrastructure/entities';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('DB_CONTAINER_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE_BOARD'),
    timezone: 'Z',
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    logging: process.env.NODE_ENV !== PRODUCTION,
    // logger     : new SqlLogger(),
    entities: [AuthEntity, UserEntity, ProfileEntity],
  }),
};

export const boardTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('DB_CONTAINER_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE_BOARD'),
    timezone: 'Z',
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    logging: process.env.NODE_ENV !== PRODUCTION,
    // logger     : new SqlLogger(),
    entities: [
      PostsEntity,
      CommentsEntity,

      ProjectEntity,
      GroupEntity,
      FileEntity,
    ],
  }),
};

export const dAppTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('DB_CONTAINER_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE_DAPP'),
    timezone: configService.get<string>('DB_TIMEZONE'),
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    // logging    : process.env.NODE_ENV !== PRODUCTION,
    // logger     : new SqlLogger(),
    entities: [
      Transaction,

      Wallet,
      RelWalletAccount,
      Account,

      Dapp,

      Contract,
      Token,
      RelContractFunctionSignature,
      ContractFunctionSignature,

      ApplicationForm,
      ApplicationFormDapp,
      ApplicationFormContract,
      ApplicationFormContractAudit,
      ApplicationFormContractFunctionSignature,
      ApplicationFormProcessLog,
      ApplicationFormTermsAgreement,

      Reward,
      RewardPolicy,
      RewardHistory,
    ],
  }),
};
