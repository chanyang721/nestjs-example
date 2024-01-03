import { Injectable, OnModuleInit }     from "@nestjs/common";
import { AzureStorageService }          from "../../../libs/infra/azure/storage/azure.storage.service";
import { AZURE_STORAGE_CONTAINER_NAME } from "../../../libs/infra/azure/storage/enums/azure.storage.enum";
import { MailService }                  from "../../../libs/infra/mail/mail.srevice";
import { DappRepository }               from "./dapp.repository";
import { RegisterDappDto }              from "./dtos/register-dapp.dto";
import { SendMailDto }                  from "./dtos/send-mail.dto";
import { Dapp }                         from "./entities/dapp.entity";



@Injectable()
export class DappService {
    private readonly CONTAINER_NAME: string = AZURE_STORAGE_CONTAINER_NAME.DAPP;
    
    
    constructor(
      private readonly dappRepository: DappRepository,
      private readonly azureStorageService: AzureStorageService,
      private readonly mailService: MailService
    ) {
    }
    
    async registerDapp( logo: Express.Multer.File, registerDappDto: RegisterDappDto ): Promise<Dapp> {
        const logoKey = await this.azureStorageService.uploadFile( this.CONTAINER_NAME, logo.originalname, logo.buffer );
        
        const registeredDappApplication = await this.dappRepository.registerDapp({
            ...registerDappDto,
            logo: logoKey
        })
        
        return registeredDappApplication;
    }
    
    
    async sendMail(sendMailDto: SendMailDto): Promise<void> {
        // 제목, 내용 template 가져오기
        return this.mailService.sendMail( sendMailDto.to, "제목이에요", `<div>난 내용이야<div>` );
    }
}
