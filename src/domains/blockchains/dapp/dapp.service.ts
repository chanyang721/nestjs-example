import { Injectable, OnModuleInit }     from "@nestjs/common";
import { AzureStorageService }          from "../../../libs/infra/azure/storage/azure.storage.service";
import { AZURE_STORAGE_CONTAINER_NAME } from "../../../libs/infra/azure/storage/enums/azure.storage.enum";
import { MailService }                  from "../../../libs/infra/mail/mail.srevice";
import { DappRepository }               from "./dapp.repository";
import { RegisterDappDto }              from "./dtos/register-dapp.dto";



@Injectable()
export class DappService {
    private readonly CONTAINER_NAME: string = AZURE_STORAGE_CONTAINER_NAME.DAPP;
    
    
    constructor(
      private readonly dappRepository: DappRepository,
      private readonly azureStorageService: AzureStorageService,
      private readonly mailService: MailService
    ) {
    }
    
    async registerDapp( logo: Express.Multer.File, registerDappDto: RegisterDappDto ): Promise<any> {
        const logoKey = await this.azureStorageService.uploadFile( this.CONTAINER_NAME, logo.originalname, logo.buffer );
        
        const registeredDappApplication = await this.dappRepository.registerDapp({
            ...registerDappDto,
            logo: logoKey
        })
        
        return registeredDappApplication
    }
    
    
    async sendMail() {
        return this.mailService.sendMail( "", "", "" );
    }
}
