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


  async findById( id: number ): Promise<UserEntity> {
    return await transaction(
      [ this.mainDataSource ],
      async( mainQueryRunner ) => {
        return await this.findById(id);
    });
  }


  public async createUser( createUserDto: any ): Promise<any> {
    return await this.save(createUserDto);
  }
}
