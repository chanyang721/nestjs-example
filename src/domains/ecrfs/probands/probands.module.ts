import { Module }             from "@nestjs/common";
import { ProbandsController } from "./probands.controller";
import { ProbandsService }    from "./probands.service";



@Module( {
    controllers: [ ProbandsController ],
    providers  : [ ProbandsService ]
} )
export class ProbandsModule {
}
