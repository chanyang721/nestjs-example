import { Injectable, Logger }     from "@nestjs/common";
import { InjectRepository }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Contract }               from "./entities/contract.entity";



@Injectable()
export class ContractsRepository extends Repository<Contract> {
    private readonly logger = new Logger( ContractsRepository.name );
    
    
    constructor(
      private readonly dataSource: DataSource,
      @InjectRepository( Contract )
      private readonly contractsRepository: Repository<Contract>
    ) {
        super( Contract, dataSource.createEntityManager() );
    }
    
    
}