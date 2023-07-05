import { Injectable }             from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CatEntity }                          from "../../entitiy/cat.command.entity";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class CatsCommandRepository extends Repository<CatEntity> {
  constructor(
    @InjectDataSource("main")
    private readonly mainDataSource: DataSource,
    @InjectDataSource("support")
    private readonly supportDataSource: DataSource,
    @InjectRepository(CatEntity, "main")
    private readonly catsRepository: Repository<CatEntity>,
  ) {
    super(CatEntity, mainDataSource.createEntityManager());
  }


  public async getCatBy( id: string ) {
    await this.mainDataSource.transaction(async manager => {

    })
    await this.supportDataSource.getRepository(CatEntity)
    return await this.createQueryBuilder("cat")
                     .where("cat.id = :id", { id })
                     .getOne();

  }
}