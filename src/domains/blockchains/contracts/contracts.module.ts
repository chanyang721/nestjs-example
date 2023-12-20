import { Module }                       from "@nestjs/common";
import { TypeOrmModule }                from "@nestjs/typeorm";
import { ContractsController }          from "./contracts.controller";
import { ContractsRepository }          from "./contracts.repository";
import { ContractsService }             from "./contracts.service";
import { Contract }                     from "./entities/contract.entity";
import { FunctionSignature }            from "./entities/function-signature.entity";
import { ContractAgreementLog }         from "./entities/logs/contract-agreement-log.entity";
import { RelContractFunctionSignature } from "./entities/rel-contract-function_signature.entity";
import { ContractAgreementSup }         from "./entities/supports/contract-agreement-sup.entity";
import { ContractTemp }                 from "./entities/temp/contract-temp.entits";
import { Token }                        from "./entities/token.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            /*
             * Service Entities
             * */
            Contract, ContractTemp,
            RelContractFunctionSignature, FunctionSignature,
            
            Token,
            /*
             * System Entities
             * */
            ContractAgreementSup,
            ContractAgreementLog
        ] )
    ],
    controllers: [ ContractsController ],
    providers  : [ ContractsService, ContractsRepository ]
} )
export class ContractsModule {
}
