import { Module } from "@nestjs/common";
import { MailModule } from "../../libs/infra/mail/mail.module";
import { ApplicationFormsModule } from "./applicationForms/application.forms.module";
import { ContractsModule } from "./contracts/contracts.module";
import { DappModule } from "./dapp/dapp.module";
import { RewardsModule } from "./rewards/rewards.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { WalletsModule } from "./wallets/wallets.module";



@Module( {
    imports  : [
        DappModule,
        WalletsModule,
        ContractsModule,
        TransactionsModule,
        ApplicationFormsModule,
        RewardsModule,
        
        MailModule
    ],
    providers: []
} )
export class BlockchainsModule {
}