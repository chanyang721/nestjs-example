import { DataSource, Repository } from "typeorm";
import { UserEntity }             from "../entities/user.entity";
import { RepositoryInject } from "../../../../lib/utils/decoretors/repository.decoretor";
import { InjectDataSource } from "@nestjs/typeorm";
import { MAIN }             from "../../../../lib/utils/constants";



@RepositoryInject(UserRepository)
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource,
  ) {
    super(UserEntity, mainDataSource.createEntityManager());
  }


}
