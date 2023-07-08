import { Injectable }                         from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
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

  async registerUser( userInfo: any ): Promise<any> {
    const rawQuery =  await this.query(`
      INSERT INTO users (id, uid)
      VALUES ('${userInfo.id}', '${userInfo.uid}')
    `)

    const queryBuiler = await this.createQueryBuilder('user')
      .insert()
      .into(UserEntity)
      .values(userInfo)
      .execute()

    const transaction = await this.mainDataSource.transaction(async entityManager => {

    })


  }
}