import { EmailAddress, EmailClient } from '@azure/communication-email';
import { DefaultAzureCredential } from '@azure/identity';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AzureCommunicationService {
    private readonly AZURE_EMAIL_CONNECTION_STRING: string;
    private readonly emailClient: EmailClient;
    private readonly credential = new DefaultAzureCredential();
    
    constructor(private readonly logger: Logger) {
        this.AZURE_EMAIL_CONNECTION_STRING =
          process.env.AZURE_EMAIL_CONNECTION_STRING;
        if (this.AZURE_EMAIL_CONNECTION_STRING) {
            this.emailClient = new EmailClient(this.AZURE_EMAIL_CONNECTION_STRING);
            this.logger.debug('AZURE_STORAGE is connected');
        } else {
            this.logger.debug('AZURE_EMAIL_CONNECTION_STRING is undefined');
        }
    }
    
    async sendEmail(
      from: string,
      to: EmailAddress[],
      content: string,
    ): Promise<void> {
        await this.emailClient.beginSend({
            senderAddress: from,
            content: {
                subject: 'default subject',
                html: content,
            },
            recipients: {
                to: to,
                // cc:
            },
        });
        this.logger.debug('메일 전송 완료')
    }
}
