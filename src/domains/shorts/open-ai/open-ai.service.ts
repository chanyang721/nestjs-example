import { Injectable, Logger }            from "@nestjs/common";
import { Cron, CronExpression, Timeout } from "@nestjs/schedule";
import OpenAI                            from "openai";
import { CommonConfigService } from "../../../libs/config/common.config.service";



@Injectable()
export class OpenAiService {
    private readonly openai: OpenAI;
    
    
    constructor(
      private readonly commonConfigService: CommonConfigService
    ) {
        this.openai = new OpenAI( this.commonConfigService.accessOpenApiKey );
    }
    
    @Timeout(0)
    @Cron(CronExpression.EVERY_30_SECONDS)
    private async initiateOpenAi() {
        console.log('cron test log')
    }
    
}
