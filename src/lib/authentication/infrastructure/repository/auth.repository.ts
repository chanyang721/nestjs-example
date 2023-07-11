import { DataSource, Repository } from "typeorm";
import { Injectable }             from "@nestjs/common";
import { InjectDataSource }       from "@nestjs/typeorm";
import { AuthEntity } from "../entity/auth.entity";
import { MAIN }       from "../../../utils/constant";



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
    return {
      id: "uuid",
      uid: uid,
      platform: "test",
      currentRefreshToken: "test",
    }
  }

  async updateCurrentRefreshToken( uid: string, hashedRefreshToken: string ) {
    await this.update({ uid }, { currentRefreshToken: hashedRefreshToken });
  }
}
