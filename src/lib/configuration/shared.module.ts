import { Global, Module }              from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SharedConfigService }         from "./shared.config.service";



@Global() @Module({
  imports  : [ ConfigModule ],
  exports  : [ SharedConfigService ],
  providers: [
    SharedConfigService,
    ConfigService
  ]
})
export class SharedModule {

}
