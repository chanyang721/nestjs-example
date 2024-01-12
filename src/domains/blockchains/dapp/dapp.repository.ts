import { Injectable, Logger }     from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { RegisterDappDto }        from "./dtos/register-dapp.dto";
import { Dapp }                   from "./entities/dapp.entity";



@Injectable()
export class DappRepository extends Repository<Dapp> {
    protected readonly logger: Logger = new Logger( DappRepository.name );
    
    
    constructor(
        private readonly dataSource: DataSource
    ) {
        super( Dapp, dataSource.createEntityManager() );
    }
    
    
    async registerDapp( registerDapp: RegisterDappDto ): Promise<Dapp> {
        const newDappApplication = await this.save( registerDapp );
        
        this.logger.debug( "newDappApplication :", newDappApplication.name );
        return newDappApplication;
    }
    
    
    async findDappByVerificationCode( code: string ): Promise<Dapp> {
        const dapp: Dapp = await this.findOne({
            where: { verification_code: code }
        })
        
        return dapp;
    }
}