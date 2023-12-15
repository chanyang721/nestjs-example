import { Module }                         from "@nestjs/common";
import { TypeOrmModule }                  from "@nestjs/typeorm";
import { ContractsController }            from "./contracts.controller";
import { ContractsRepository }            from "./contracts.repository";
import { ContractsService }               from "./contracts.service";
import { RelContractToFunctionSignature } from "./entities/contract-to-function-signature.entity";
import { Contract }                       from "./entities/contract.entity";
import { FunctionSignature }              from "./entities/function-signature.entity";
import { Token }                          from "./entities/token.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [
            Contract,
            Token,
            RelContractToFunctionSignature, FunctionSignature
        ] )
    ],
    controllers: [ ContractsController ],
    providers  : [ ContractsService, ContractsRepository ]
} )
export class ContractsModule {
}
