import { DataSource, Repository } from "typeorm";
import { InjectDataSource }       from "@nestjs/typeorm";
import { RepositoryInject }       from "../../../utils/decoretors/repository.decoretor";
import { MAIN }                   from "../../../utils/constants";
import { AuthEntity }             from "../entities/auth.entity";
import { transaction }            from "../../../database/transaction";
import { UserEntity }             from "../../../../domain/user/infrastructure/entities/user.entity";
import { RegisterUserDto }        from "../../presentation/dtos/auth.register.user.dto";



@RepositoryInject(AuthRepository)
export class AuthRepository extends Repository<AuthEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource,
  ) {
    super(AuthEntity, mainDataSource.createEntityManager());
  }

  async registerUser( registerUserDto: RegisterUserDto ): Promise<AuthEntity> {
    return await transaction<AuthEntity, AuthEntity>(
      [ this.mainDataSource ],
      async ( mainQueryRunner ) => {
        const auth = new AuthEntity(registerUserDto);
        const user = new UserEntity({ uid: registerUserDto.uid });
        const savedAuthData = await mainQueryRunner.manager.save(auth);
        await mainQueryRunner.manager.save(user)

        return savedAuthData
      },
      async () => {
        /**
         * catch black logic without transaction rollback and throw error
         */
      }
    )
  }


  public async findByUid( uid: string ): Promise<any> {
    const qb = await this.getQueryBuilderByAliasWhereUid("auth", uid);
    return await qb.getOne();
  }


  async updateCurrentRefreshToken( uid: string, hashedRefreshToken: string ) {
    await this.update({ uid }, { current_refresh_token: hashedRefreshToken });
  }


  async getQueryBuilderByAliasWhereUid( alias: string, uid: string ) {
    return this.createQueryBuilder(alias)
               .where(`${alias}.uid = :uid`, { uid });
  }
}
