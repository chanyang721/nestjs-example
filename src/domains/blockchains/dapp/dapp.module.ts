import { Module }              from "@nestjs/common";
import { TypeOrmModule }       from "@nestjs/typeorm";
import { CommonConfigService } from "../../../libs/config/common.config.service";
import { AzureStorageService } from "../../../libs/infra/azure/storage/azure.storage.service";
import { MailService }         from "../../../libs/infra/mail/mail.srevice";
import { DappController }      from "./dapp.controller";
import { DappRepository }      from "./dapp.repository";
import { DappService }         from "./dapp.service";
import { Dapp }                from "./entities/dapp.entity";
import { DappApplication }     from "./entities/dapp_application.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [ Dapp, DappApplication ] )
    ],
    controllers: [ DappController ],
    providers  : [
        DappService,
        DappRepository,
        AzureStorageService,
        CommonConfigService,
        MailService
    ]
} )
export class DappModule {
}
