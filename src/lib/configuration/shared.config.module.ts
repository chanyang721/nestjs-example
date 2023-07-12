import { Global, Module }              from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SharedConfigService }         from "./shared.config.service";



// @Global()
// @Module({
//   imports  : [ ConfigModule ],
//   exports  : [],
//   providers: [
//     SharedConfigService, ConfigService
//   ]
// })
// export class SharedConfigModule {
//
// }
