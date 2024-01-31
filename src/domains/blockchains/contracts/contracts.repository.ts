import { Injectable, Logger } from "@nestjs/common";
import { DataSource } from "typeorm";



@Injectable()
export class ContractsRepository {
    private readonly logger = new Logger( ContractsRepository.name );
    
    
    constructor(
      private readonly dataSource: DataSource
    ) {
    }
    
    
}