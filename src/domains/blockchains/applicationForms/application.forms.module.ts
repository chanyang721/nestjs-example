import { Module }                        from "@nestjs/common";
import { TypeOrmModule }                 from "@nestjs/typeorm";
import { ApplicationFormsController }    from "./application.forms.controller";
import { ApplicationFormsRepository }    from "./application.forms.repository";
import { ApplicationFormsService }       from "./application.forms.service";
import { ApplicationFormContractAudit }  from "./entities/application.form.contract.audits.entity";
import { ApplicationFormContract }       from "./entities/application.form.contract.entity";
import { ApplicationFormContractFunctionSignature } from "./entities/application.form.contract.function.signature.entity";
import { ApplicationFormDapp }           from "./entities/application.form.dapp.entity";
import { ApplicationForm }               from "./entities/application.form.entity";
import { ApplicationFormTermsAgreement } from "./entities/application.form.terms.agreement.entity";
import { ApplicationFormProcessLog }     from "./entities/application.from.process.log.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            ApplicationForm,
            ApplicationFormDapp,
            ApplicationFormContract,
            ApplicationFormContractAudit,
            ApplicationFormContractFunctionSignature,
            ApplicationFormProcessLog,
            ApplicationFormTermsAgreement
        ] )
    ],
    controllers: [ ApplicationFormsController ],
    providers  : [ ApplicationFormsService, ApplicationFormsRepository ]
} )
export class ApplicationFormsModule {
}
