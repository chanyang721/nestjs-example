import { Module }              from "@nestjs/common";
import { CommonConfigService } from "../../../libs/config/common.config.service";
import { AzureStorageService } from "../../../libs/infra/azure/azure.storage.service";
import { DappController }      from "./dapp.controller";
import { DappService }         from "./dapp.service";



@Module( {
    imports    : [],
    controllers: [ DappController ],
    providers  : [ DappService, AzureStorageService, CommonConfigService ]
} )
export class DappModule {
}
