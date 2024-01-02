import { Injectable, Logger }     from "@nestjs/common";
import { InjectRepository }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { RegisterDappDto }        from "./dtos/register-dapp.dto";
import { Dapp }                   from "./entities/dapp.entity";
import { DappApplication }        from "./entities/dapp_application.entity";



@Injectable()
export class DappRepository extends Repository<Dapp> {
    protected readonly logger: Logger = new Logger( DappRepository.name );
    
    
    constructor(
      private readonly dataSource: DataSource,
      @InjectRepository( Dapp )
      private readonly dappApplicationRepository: Repository<DappApplication>
    ) {
        super( Dapp, dataSource.createEntityManager() );
    }
    
    
    async registerDapp( registerDapp: RegisterDappDto ): Promise<DappApplication> {
        const newDappApplication = await this.dappApplicationRepository.save( registerDapp );
        
        this.logger.debug("newDappApplication :", newDappApplication.name);
        return newDappApplication;
    }
}