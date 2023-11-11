import { Module }            from "@nestjs/common";
import { AnwsersController } from "./anwsers.controller";
import { AnwsersService }    from "./anwsers.service";



@Module( {
    controllers: [ AnwsersController ],
    providers  : [ AnwsersService ]
} )
export class AnwsersModule {
}
