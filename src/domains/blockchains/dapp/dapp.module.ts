import { Module }              from "@nestjs/common";
import { TypeOrmModule }       from "@nestjs/typeorm";
import { CommonConfigService } from "../../../libs/config/common.config.service";
import { AzureStorageService } from "../../../libs/infra/azure/storage/azure.storage.service";
import { MailService }         from "../../../libs/infra/mail/mail.srevice";
import { DappController }      from "./dapp.controller";
import { DappRepository }      from "./dapp.repository";
import { DappService }         from "./dapp.service";
import { Dapp }                from "./entities/dapp.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [ Dapp ] )
    ],
    controllers: [ DappController ],
    providers  : [
        /*Service Layer*/
        DappService,
        AzureStorageService,
        CommonConfigService,
        MailService,
        
        /*Repository Layer*/
        DappRepository,
    ]
} )
export class DappModule {
}
