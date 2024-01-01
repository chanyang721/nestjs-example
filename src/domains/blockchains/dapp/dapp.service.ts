import { Injectable, OnModuleInit } from "@nestjs/common";
import { AzureStorageService }      from "../../../libs/infra/azure/azure.storage.service";
import { MailService }         from "../../../libs/infra/mail/mail.srevice";



@Injectable()
export class DappService implements OnModuleInit {
    private readonly CONTAINER_NAME: string;
    
    
    constructor(
      private readonly azureStorageService: AzureStorageService,
      private readonly mailService: MailService
    ) {
    }
    
    
    public onModuleInit() {
        console.log('testoni')
    }
    
    
    async registerDapp( file: Express.Multer.File, registerDappDto: any ): Promise<any> {
        return await this.azureStorageService.uploadFile( this.CONTAINER_NAME, file.originalname, file.buffer );
    }
    
    async sendMail() {
        return this.mailService.sendMail('', '' ,'')
    }
}
