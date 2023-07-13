import { DataSource, Repository } from "typeorm";
import { InjectDataSource }       from "@nestjs/typeorm";
import { UserEntity }          from "../entities/user.entity";
import { RepositoryInjection } from "../../../../lib/utils/decoretors/repository.decoretor";
import { MAIN }                from "../../../../lib/utils/constants";



@RepositoryInjection(UserEntity)
export class UserRepository extends Repository<UserEntity>{
  // constructor(
  //   @InjectDataSource(MAIN)
  //   private readonly mainDataSource: DataSource,
  // ) {
  //   super(UserEntity, mainDataSource.createEntityManager());
  // }


}
