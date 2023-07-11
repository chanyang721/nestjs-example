import { Injectable }                         from "@nestjs/common";
import { InjectDataSource }                   from "@nestjs/typeorm";
import { DataSource, Repository }             from "typeorm";
import { UserEntity }                         from "../entities/user.entity";



@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectDataSource("main")
    private readonly mainDataSource: DataSource,
  ) {
    super(UserEntity, mainDataSource.createEntityManager());
  }

}
