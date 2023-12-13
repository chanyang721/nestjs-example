import { Module }          from "@nestjs/common";
import { ScheduleModule }  from "@nestjs/schedule";
import { CommonConfigService } from "../../../libs/config/common.config.service";
import { HttpModule }    from "../../../libs/infra/http/http.module";
import { OpenAiService } from "./open-ai.service";



@Module( {
    imports: [
        ScheduleModule.forRoot(),
        HttpModule,
    ],
    providers  : [
        OpenAiService,
        CommonConfigService
    ]
} )
export class OpenAiModule {
}
