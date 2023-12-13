import { Module }       from "@nestjs/common";
import { OpenAiModule } from "./open-ai/open-ai.module";



@Module( {
    imports  : [
        OpenAiModule
    ],
    providers: [],
    exports  : []
} )
export class ShortsModule {
}