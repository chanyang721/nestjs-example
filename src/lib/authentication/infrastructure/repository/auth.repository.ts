import { Injectable }             from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity }             from "../../../../domain/user/infrastructure/entities/user.entity";
import { InjectDataSource }       from "@nestjs/typeorm";



@Injectable()
export class AuthRepository extends Repository<UserEntity> {
  constructor(
    @InjectDataSource("main")
    private readonly mainDataSource: DataSource
  ) {
    super(UserEntity, mainDataSource.createEntityManager());
  }

  /**
   *
   */

}
