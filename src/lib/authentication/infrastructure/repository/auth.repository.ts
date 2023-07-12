import { DataSource, Repository } from "typeorm";
import { Injectable }             from "@nestjs/common";
import { InjectDataSource }       from "@nestjs/typeorm";
import { AuthEntity }             from "../entity/auth.entity";
import { MAIN }                   from "../../../utils/constant";
import { AuthEntityDto }          from "../../presentation/dto/auth.entity.dto";



@Injectable()
export class AuthRepository extends Repository<AuthEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource
  ) {
    super(AuthEntity, mainDataSource.createEntityManager());
  }

  async registerUser( registerUserDto ): Promise<any> {
    // await this.mainDataSource.transaction(async ( entityManager ) => {
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
