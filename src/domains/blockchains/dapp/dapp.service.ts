import { Injectable, OnModuleInit }     from "@nestjs/common";
import { AzureStorageService }          from "../../../libs/infra/azure/storage/azure.storage.service";
import { AZURE_STORAGE_CONTAINER_NAME } from "../../../libs/infra/azure/storage/enums/azure.storage.enum";
import { MailService }                  from "../../../libs/infra/mail/mail.srevice";



@Injectable()
export class DappService {
    private readonly CONTAINER_NAME: string = AZURE_STORAGE_CONTAINER_NAME.DAPP;
    
    
    constructor(
      private readonly azureStorageService: AzureStorageService,
      private readonly mailService: MailService
    ) {
    }
    
    async registerDapp( file: Express.Multer.File, registerDappDto: any ): Promise<any> {
        return await this.azureStorageService.uploadFile( this.CONTAINER_NAME, file.originalname, file.buffer );
    }
    
    
    async sendMail() {
        return this.mailService.sendMail( "", "", "" );
    }
}
