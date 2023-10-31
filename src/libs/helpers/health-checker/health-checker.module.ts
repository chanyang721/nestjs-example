import { Module }                  from "@nestjs/common";
import { TerminusModule }          from "@nestjs/terminus";
import { HealthCheckerController } from "./health-checker.controller";
import { TerminusLogger }          from "./terminus-logger.service";



@Module( {
    imports    : [
        TerminusModule.forRoot( {
            logger       : TerminusLogger,
            errorLogStyle: "pretty"
        } )
    ],
    controllers: [ HealthCheckerController ],
    providers  : []
} )
export class HealthCheckerModule {

}
