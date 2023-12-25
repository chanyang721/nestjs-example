import { Module }                       from "@nestjs/common";
import { TypeOrmModule }                from "@nestjs/typeorm";
import { ContractsController }          from "./contracts.controller";
import { ContractsRepository }          from "./contracts.repository";
import { ContractsService }             from "./contracts.service";
import { Contract }                     from "./entities/contract.entity";
import { FunctionSignature }            from "./entities/function-signature.entity";
import { RelContractFunctionSignature } from "./entities/rel-contract-function_signature.entity";
import { TermsAgreementSup }            from "./entities/terms-agreement-sup.entity";
import { ContractApplication }          from "./entities/contract-application.entits";
import { TermsAgreement }      from "./entities/terms-agreement.entity";
import { Token }                        from "./entities/token.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            /*
             * Service Entities
             * */
            Contract, ContractApplication,
            TermsAgreement,
            RelContractFunctionSignature, FunctionSignature,
            
            Token,
            /*
             * System Entities
             * */
            TermsAgreementSup
        ] )
    ],
    controllers: [ ContractsController ],
    providers  : [ ContractsService, ContractsRepository ]
} )
export class ContractsModule {
}
