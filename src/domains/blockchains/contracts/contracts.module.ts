import { Module }                      from "@nestjs/common";
import { TypeOrmModule }               from "@nestjs/typeorm";
import { ContractsController }         from "./contracts.controller";
import { ContractsRepository }         from "./contracts.repository";
import { ContractsService }            from "./contracts.service";
import { ContractToFunctionSignature } from "./entities/contract-to-function-signature.entity";
import { ContractToToken }             from "./entities/contract-to-token.entity";
import { Contract }                    from "./entities/contract.entity";
import { FunctionSignature }           from "./entities/function-signature.entity";
import { Token }                       from "./entities/token.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            Contract,
            ContractToToken,
            Token,
            FunctionSignature,
            ContractToFunctionSignature
        ] )
    ],
    controllers: [ ContractsController ],
    providers  : [ ContractsService, ContractsRepository ]
} )
export class ContractsModule {
}
