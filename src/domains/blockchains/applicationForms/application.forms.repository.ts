import { Injectable, Logger }      from "@nestjs/common";
import { InjectRepository }        from "@nestjs/typeorm";
import { DataSource, Repository }  from "typeorm";
import { ApplicationContractForm } from "./entities/application.contract.form.entity";
import { ApplicationDappForm }     from "./entities/application.dapp.form.entity";
import { ApplicationForm }         from "./entities/application.form.entity";



@Injectable()
export class ApplicationFormsRepository extends Repository<ApplicationForm> {
    private readonly logger: Logger = new Logger( ApplicationFormsRepository.name );
    
    
    constructor(
      private readonly dataSource: DataSource,
      @InjectRepository( ApplicationDappForm )
      private readonly applicationDappFormRepository: Repository<ApplicationDappForm>,
      @InjectRepository( ApplicationContractForm )
      private readonly applicationContractFormRepository: Repository<ApplicationContractForm>
    ) {
        super( ApplicationForm, dataSource.createEntityManager() );
    }
    
    
    async findApplicationFormById( applicationFormId: string ): Promise<ApplicationForm> {
        return await this.findOne( {
            where: { id: applicationFormId }
        } );
    }
}