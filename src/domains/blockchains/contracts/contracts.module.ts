import { Module }                      from "@nestjs/common";
import { TypeOrmModule }               from "@nestjs/typeorm";
import { ContractsController }         from "./contracts.controller";
import { ContractsService }            from "./contracts.service";
import { ContractToFunctionSignature } from "./entities/contract-to-function-signature.entity";
import { Contract }                    from "./entities/contract.entity";
import { FunctionSignature }           from "./entities/function-signature.entity";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [ Contract, FunctionSignature, ContractToFunctionSignature ] )
    ],
    controllers: [ ContractsController ],
    providers  : [ ContractsService ]
} )
export class ContractsModule {
}
