import { DataSource, Repository } from "typeorm";
import { InjectDataSource }       from "@nestjs/typeorm";
import { UserEntity }             from "../entities/user.entity";
import { RepositoryInject }       from "../../../../lib/utils/decoretors/repository.decoretor";
import { MAIN }                   from "../../../../lib/utils/constants";
import { transaction }            from "../../../../lib/database/transaction";



@RepositoryInject(UserRepository)
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource
  ) {
    super(UserEntity, mainDataSource.createEntityManager());
  }

  async findById(id: number): Promise<UserEntity> {
    return await transaction(
      [this.mainDataSource],
      async ( mainQueryRunner ) => {
        return await this.findById(id)
      }
    )
  }
}
