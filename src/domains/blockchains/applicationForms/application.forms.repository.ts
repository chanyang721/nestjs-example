import { Injectable, Logger }      from "@nestjs/common";
import { InjectRepository }        from "@nestjs/typeorm";
import { DataSource, Repository }  from "typeorm";
import { ApplicationFormContract } from "./entities/application.form.contract.entity";
import { ApplicationFormDapp }     from "./entities/application.form.dapp.entity";
import { ApplicationForm }         from "./entities/application.form.entity";



@Injectable()
export class ApplicationFormsRepository extends Repository<ApplicationForm> {
    private readonly logger: Logger = new Logger( ApplicationFormsRepository.name );
    
    
    constructor(
      private readonly dataSource: DataSource,
      @InjectRepository( ApplicationFormDapp )
      private readonly applicationDappFormRepository: Repository<ApplicationFormDapp>,
      @InjectRepository( ApplicationFormContract )
      private readonly applicationContractFormRepository: Repository<ApplicationFormContract>
    ) {
        super( ApplicationForm, dataSource.createEntityManager() );
    }
    
    
    async findApplicationFormById( applicationFormId: string ): Promise<ApplicationForm> {
        return await this.findOne( {
            where: { id: applicationFormId }
        } );
    }
    
    
    async registerApplicationForm(): Promise<ApplicationForm> {
        
        return
    }
}