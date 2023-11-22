import { Module }            from "@nestjs/common";
import { TypeOrmModule }     from "@nestjs/typeorm";
import { WalletEntity }      from "./entities/wallet.entity";
import { WalletsController } from "./wallets.controller";
import { WalletsService }    from "./wallets.service";



@Module( {
    imports    : [
        TypeOrmModule.forFeature([ WalletEntity ])
    ],
    controllers: [ WalletsController ],
    providers  : [ WalletsService ]
} )
export class WalletsModule {
}
