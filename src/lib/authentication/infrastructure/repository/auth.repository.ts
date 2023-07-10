import { DataSource, Repository } from "typeorm";
import { Injectable }             from "@nestjs/common";
import { InjectDataSource }       from "@nestjs/typeorm";
import { UserEntity }             from "../../../../domain/user/infrastructure/entities/user.entity";



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
