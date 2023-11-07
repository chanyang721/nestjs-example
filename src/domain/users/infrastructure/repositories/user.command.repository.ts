import { Injectable }                    from "@nestjs/common";
import { InjectDataSource }              from "@nestjs/typeorm";
import { DataSource, Repository }        from "typeorm";
import { UserEntity }                    from "../entities/user.entity";
import { IUserCommandRepositoryAdapter } from "../interfaces/user.repository.interface";


@Injectable()
export class UserCommandRepository extends Repository<UserEntity>
  implements IUserCommandRepositoryAdapter {
    
    constructor(
      @InjectDataSource()
      private readonly dataSource: DataSource
    ) {
        super( UserEntity, dataSource.createEntityManager() );
    }
    
    
    public async updateUser( updateUserCommand: any ) {
        console.log( "updateUserCommand :", updateUserCommand );
        return await this.save( updateUserCommand );
    }
}
