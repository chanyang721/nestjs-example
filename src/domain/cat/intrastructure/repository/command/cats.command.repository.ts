import { Injectable }       from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CatCommandEntity } from "../../entitiy/cat.command.entity";
import { Repository }       from "typeorm";



@Injectable()
export class CatsCommandRepository {
  constructor(
    @InjectRepository(CatCommandEntity)
    private readonly catsRepository: Repository<CatCommandEntity>
  ) {}


  public async getCatBy( id: string ) {
    return await this.catsRepository
                     .createQueryBuilder("cat")
                     .where("cat.id = :id", { id })
                     .getOne();

  }
}