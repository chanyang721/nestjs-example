import { DataSource, Repository } from 'typeorm';
import { InjectDataSource }       from '@nestjs/typeorm';
import { RepositoryInject }       from '../../../utils/decoretors';
import { PROJECT }                from '../../../utils/constants';
import { transaction }            from '../../../database/orm/typeorm/transaction';
import { RegisterUserDto }        from '../../presentation/dtos/auth.register.user.dto';
import { UserEntity }             from '../../../../domain/users/infrastructure/entities/user.entity';
import { AuthEntity }             from '../entities/auth.entity';



@RepositoryInject( AuthRepository )
export class AuthRepository extends Repository<AuthEntity> {
    constructor(
        @InjectDataSource( PROJECT )
        private readonly mainDataSource: DataSource,
    ) {
        super( AuthEntity, mainDataSource.createEntityManager() );
    }
    
    
    async registerUser( registerUserDto: RegisterUserDto ): Promise<AuthEntity> {
        return await transaction<AuthEntity, AuthEntity>(
            [ this.mainDataSource ],
            async ( mainQueryRunner ) => {
                const user = new UserEntity( { uid: registerUserDto.uid } );
                user.auth = new AuthEntity( registerUserDto );
                
                const createdUser = await mainQueryRunner.manager.save( user );
                return createdUser.auth;
            }, async () => {
                /**
                 * catch black logic without transaction rollback and throw error
                 */
            } );
    }
    
    
    public async findByUid( uid: string ): Promise<any> {
        const qb = await this.getQueryBuilderByAliasWhereUid( 'auth', uid );
        return await qb.getOne();
    }
    
    
    async updateCurrentRefreshToken( uid: string, hashedRefreshToken: string ) {
        await this.update( { uid }, { current_refresh_token: hashedRefreshToken } );
    }
    
    
    async getQueryBuilderByAliasWhereUid( alias: string, uid: string ) {
        return this.createQueryBuilder( alias )
                   .where( `${ alias }.uid = :uid`, { uid } );
    }
}
