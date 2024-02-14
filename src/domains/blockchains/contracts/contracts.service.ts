import { Injectable } from '@nestjs/common';
import { ContractsRepository } from './contracts.repository';



@Injectable()
export class ContractsService {
  
  
  constructor(
    private readonly contractsRepository: ContractsRepository,
  ) {
  }
}
