import { DataSource, Repository } from "typeorm";
import { InjectDataSource }    from "@nestjs/typeorm";
import { MAIN }                from "../../../utils/constants";
import { RepositoryInjection } from "../../../utils/decoretors/repository.decoretor";
import { AuthEntity }          from "../entities/auth.entity";
import { Injectable }          from "@nestjs/common";


// @Injectable()
@RepositoryInjection(AuthEntity)
export class AuthRepository extends Repository<AuthEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource
  ) {
    super(AuthEntity, mainDataSource.createEntityManager());
  }

  async registerUser( registerUserDto ): Promise<any> {
    // await this.mainDataSource.transaction(async ( manager ) => {
    //
    // })

    return {
      uid: "",
    };
  }


  public async findByUid( uid: string ): Promise<any> {
    const qb = await this.getQueryBuilderByAliasWhereUid("auth", uid)
    return await qb.getOne();
  }

  async updateCurrentRefreshToken( uid: string, hashedRefreshToken: string ) {
    await this.update({ uid }, { current_refresh_token: hashedRefreshToken });
  }

  async getQueryBuilderByAliasWhereUid( alias: string, uid: string ) {
    return this.createQueryBuilder(alias)
               .where(`${alias}.uid = :uid`, { uid })
  }
}
