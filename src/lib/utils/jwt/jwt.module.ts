import { Module }                       from "@nestjs/common";
import { JwtModule as OriginJwtModule } from "@nestjs/jwt";
import { JwtService }                   from "./jwt.service";
import { SharedConfigService } from "../../configuration/shared.config.service";



@Module({
  imports  : [ OriginJwtModule ],
  exports  : [],
  providers: [
    SharedConfigService,
    JwtService
  ]
})
export class JwtModule extends OriginJwtModule {
  constructor() {
    super();
  }
}


