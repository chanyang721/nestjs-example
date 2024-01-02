import { EmailClient }            from "@azure/communication-email";
import { DefaultAzureCredential } from "@azure/identity";
import { Injectable }          from "@nestjs/common";
import { CommonConfigService } from "../../../config/common.config.service";



@Injectable()
export class AzureCommunicationService {
    private readonly AZURE_EMAIL_CONNECTION_STRING: string;
    private readonly emailClient: EmailClient;
    private readonly credential = new DefaultAzureCredential();
    
    
    constructor(
        private readonly commonConfigService: CommonConfigService
    ) {
        this.AZURE_EMAIL_CONNECTION_STRING = this.commonConfigService.accessAzureConfig.emailCommunicationConnectionString;
        this.emailClient = new EmailClient( this.AZURE_EMAIL_CONNECTION_STRING, this.credential );
    }
    
    
    private async sendEmail(): Promise<void> {
    }
}