import { Module }                     from "@nestjs/common";
import { TypeOrmModule }              from "@nestjs/typeorm";
import { ApplicationFormsController } from "./application.forms.controller";
import { ApplicationFormsService }    from "./application.forms.service";
import { Admin }                      from "./entities/admin.entity";
import { Applicant }                  from "./entities/applicant.entity";
import { ApplicationContractForm }    from "./entities/application-contract-form.entity";
import { ApplicationDappForm }        from "./entities/application-dapp-form.entity";
import { ApplicationForm }            from "./entities/application-form.entity";
import { ApplicationFromProcessLog }  from "./entities/application-from-process-log.entity";
import { ApplicationTermsAgreement }  from "./entities/application_terms_agreement.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            Admin,
            Applicant,
            ApplicationContractForm,
            ApplicationDappForm,
            ApplicationForm,
            ApplicationFromProcessLog,
            ApplicationTermsAgreement
        ] )
    ],
    controllers: [ ApplicationFormsController ],
    providers  : [ ApplicationFormsService ]
} )
export class ApplicationFormsModule {
}
