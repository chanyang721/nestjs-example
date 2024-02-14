import { RegisterUserDto } from '@/libs/authentication/presentation/dtos';
import { transaction } from '@/libs/database/orm/typeorm/transaction';
import { RepositoryInject } from '@/libs/utils/decoretors';
import { UserEntity } from '@/users/infrastructure/entities';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AuthEntity } from '../entities/auth.entity';
import { IAuthenticationRepositoryAdapter } from '../interfaces/authentication.repository.interface';



@RepositoryInject( AuthRepository )
export class AuthRepository extends Repository<AuthEntity>
  implements IAuthenticationRepositoryAdapter {
  
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {
    super( AuthEntity, dataSource.createEntityManager() );
  }
  
  
  async registerUser( registerUserDto: RegisterUserDto ): Promise<AuthEntity> {
    return await transaction<AuthEntity, AuthEntity>(
      [ this.dataSource ],
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
