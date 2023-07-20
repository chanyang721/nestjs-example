import { DataSource, Repository } from "typeorm";
import { InjectDataSource }       from "@nestjs/typeorm";
import { UserEntity }             from "../entities/user.entity";
import { RepositoryInject }       from "../../../../lib/utils/decoretors";
import { MAIN }                   from "../../../../lib/utils/constants";
import { transaction }            from "../../../../lib/database/transaction";



@RepositoryInject(UserCommandRepository)
export class UserCommandRepository extends Repository<UserEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource
  ) {
    super(UserEntity, mainDataSource.createEntityManager());
  }

}
