import { Logger }                 from "@nestjs/common";
import { InjectRepository }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CommentsEntity }         from "../../boards/posts/infrastructrue/entities/comments.entity";
import { Contract }               from "./entities/contract.entity";



export class ContractsRepository extends Repository<Contract> {
    private readonly logger = new Logger( ContractsRepository.name );
    
    constructor(
      @InjectRepository( CommentsEntity )
      private readonly contractsRepository: Repository<Contract>,
      private readonly dataSource: DataSource
    ) {
        super( Contract, dataSource.createEntityManager() );
    }
    
    
}