import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./entities/account.entity";
import { RelWalletAccount } from "./entities/rel-wallet-account.entity";
import { Wallet } from "./entities/wallet.entity";
import { WalletsController } from "./wallets.controller";
import { WalletsService } from "./wallets.service";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            Wallet, RelWalletAccount, Account
        ] )
    ],
    controllers: [ WalletsController ],
    providers  : [ WalletsService ]
} )
export class WalletsModule {
}
