import { Module }        from "@nestjs/common";
import { ContractsModule } from "./contracts/contracts.module";
import { WalletsModule } from "./wallets/wallets.module";



@Module( {
    imports  : [
        WalletsModule,
        ContractsModule
    ],
    providers: []
} )
export class BlockchainsModule {
}