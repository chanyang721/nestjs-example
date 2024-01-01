import { Injectable, Logger }  from "@nestjs/common";
import nodemailer              from "nodemailer";
import { CommonConfigService } from "../../config/common.config.service";



@Injectable()
export class MailService {
    private readonly logger: Logger = new Logger( MailService.name );
    private readonly transporter: nodemailer.Transporter;
    private readonly mailConfig;
    
    constructor(
      private readonly commonConfigService: CommonConfigService
    ) {
        this.mailConfig = this.commonConfigService.mailConfig;
        this.transporter = nodemailer.createTransport(
            this.mailConfig.transport,
            this.mailConfig.default
        );
    }
    
    
    async sendMail( to: string | string[], subject: string, content: string ): Promise<any> {
        try {
            this.transporter.sendMail( {
                to, subject, html: content
            } );
        }
        catch ( error ) {
            this.logger.error( "메일 전송 중 오류가 발생했습니다:", error );
        }
    }
}