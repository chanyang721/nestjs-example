import { DataSource, Repository } from 'typeorm';
import { InjectDataSource }       from '@nestjs/typeorm';
import { RepositoryInject }       from '../../../../libs/utils/decoretors';
import { MAIN }                   from '../../../../libs/utils/constants';
import { UserEntity }             from '../entities/user.entity';



@RepositoryInject( UserCommandRepository )
export class UserCommandRepository extends Repository<UserEntity> {
    constructor(
        @InjectDataSource( MAIN )
        private readonly mainDataSource: DataSource,
    ) {
        super( UserEntity, mainDataSource.createEntityManager() );
    }
    
    
    public async updateUser( updateUserCommand: any ) {
        console.log( 'updateUserCommand', updateUserCommand );
        return await this.save( updateUserCommand );
    }
}
