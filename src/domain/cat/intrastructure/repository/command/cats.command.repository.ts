import { Injectable }             from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CatEntity }                          from "../../entitiy/cat.command.entity";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class CatsCommandRepository {
  constructor(
    @InjectDataSource("main")
    private readonly mainDataSource: DataSource,
    @InjectDataSource("support")
    private readonly supportDataSource: DataSource,
    @InjectRepository(CatEntity, "main")
    private readonly catsRepository: Repository<CatEntity>,
  ) {}

  public async createOrUpdateCat( createCatDto: any ) {
    return await this.catsRepository.save(createCatDto);
  }

  public async
}