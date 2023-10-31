import { InjectDataSource }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { PROJECT }                from "../../../../libs/utils/constants";
import { RepositoryInject }       from "../../../../libs/utils/decoretors";
import { UserEntity }             from "../entities/user.entity";



@RepositoryInject( UserCommandRepository )
export class UserCommandRepository extends Repository<UserEntity> {
    constructor(
      @InjectDataSource( PROJECT )
      private readonly projectDataSource: DataSource
    ) {
        super( UserEntity, projectDataSource.createEntityManager() );
    }
    
    
    public async updateUser( updateUserCommand: any ) {
        console.log( "updateUserCommand :", updateUserCommand );
        return await this.save( updateUserCommand );
    }
}
