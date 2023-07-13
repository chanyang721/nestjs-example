import { DataSource, Repository } from "typeorm";
import { InjectDataSource }       from "@nestjs/typeorm";
import { RepositoryInject }       from "../../../utils/decoretors/repository.decoretor";
import { MAIN }                   from "../../../utils/constants";
import { AuthEntity }             from "../entities/auth.entity";



@RepositoryInject(AuthRepository)
export class AuthRepository extends Repository<AuthEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource,
  ) {
    super(AuthEntity, mainDataSource.createEntityManager());
  }

  async registerUser( registerUserDto: AuthEntity ): Promise<any> {
    const authEntity = new AuthEntity(registerUserDto);
    const qr = await this.mainDataSource.createQueryRunner();
    await qr.connect();
    await qr.startTransaction();
    try {
      const a = await qr.manager.save(authEntity);
      console.log(a)
    }
    catch ( e ) {
      await qr.rollbackTransaction();
      throw e;
    }
    finally {
      await qr.release();
    }
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
