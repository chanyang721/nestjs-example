import {
  Contract,
  ContractFunctionSignature,
  RelContractFunctionSignature,
} from '@/domains/blockchains/contracts/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractsController } from './contracts.controller';
import { ContractsRepository } from './contracts.repository';
import { ContractsService } from './contracts.service';
import { Token } from './entities/token.entity';



@Module( {
  imports: [
    TypeOrmModule.forFeature( [
      /*
       * Service Entities
       * */
      Contract,
      RelContractFunctionSignature, ContractFunctionSignature,
      Token,
    ] ),
  ],
  controllers: [ ContractsController ],
  providers: [ ContractsService, ContractsRepository ],
} )
export class ContractsModule {
}
