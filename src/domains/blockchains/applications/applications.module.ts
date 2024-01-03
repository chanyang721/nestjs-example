import { Module }                 from "@nestjs/common";
import { TypeOrmModule }          from "@nestjs/typeorm";
import { ApplicationsController } from "./applications.controller";
import { ApplicationsService }    from "./applications.service";
import { Application }    from "./entities/application.entity";
import { TermsAgreement } from "./entities/terms.agreement.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            Application,
            TermsAgreement
        ] )
    ],
    controllers: [ ApplicationsController ],
    providers  : [ ApplicationsService ]
} )
export class ApplicationsModule {
}
