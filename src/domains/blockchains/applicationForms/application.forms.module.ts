import { Module }                        from "@nestjs/common";
import { TypeOrmModule }                 from "@nestjs/typeorm";
import { ApplicationFormsController }    from "./application.forms.controller";
import { ApplicationFormsRepository }    from "./application.forms.repository";
import { ApplicationFormsService }       from "./application.forms.service";
import { ApplicationContractForm }       from "./entities/application.contract.form.entity";
import { ApplicationDappForm }           from "./entities/application.dapp.form.entity";
import { ApplicationForm }               from "./entities/application.form.entity";
import { ApplicationFormTermsAgreement } from "./entities/application.form.terms.agreement.entity";
import { ApplicationFormProcessLog }     from "./entities/application.from.process.log.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            ApplicationContractForm,
            ApplicationDappForm,
            ApplicationForm,
            ApplicationFormProcessLog,
            ApplicationFormTermsAgreement
        ] )
    ],
    controllers: [ ApplicationFormsController ],
    providers  : [ ApplicationFormsService, ApplicationFormsRepository ]
} )
export class ApplicationFormsModule {
}
