import { ConfigService }         from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";
import { Algorithm }             from "jsonwebtoken";



export const jwtModuleAsyncOptions: JwtModuleAsyncOptions = {
  inject    : [ ConfigService ],
  useFactory: ( configService: ConfigService ) => ( {
    global       : true,
    secret       : configService.get<string>("JWT_SECRET"),
    signOptions  : {
      algorithm: configService.get<Algorithm>("JWT_ALGORITHM"),
    },
    verifyOptions: {
      algorithms: [ configService.get<Algorithm>("JWT_ALGORITHM") ]
    }
  } )
}
