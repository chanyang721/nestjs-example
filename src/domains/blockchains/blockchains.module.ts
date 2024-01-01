import { Module }             from "@nestjs/common";
import { MailModule }         from "../../libs/infra/mail/mail.module";
import { ContractsModule }    from "./contracts/contracts.module";
import { DappModule }         from "./dapp/dapp.module";
import { RewardsModule }      from "./rewards/rewards.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { WalletsModule }      from "./wallets/wallets.module";



@Module( {
    imports: [
        DappModule,
        WalletsModule,
        ContractsModule,
        TransactionsModule,
        RewardsModule,
        
        MailModule
    ]
} )
export class BlockchainsModule {
}