import { Injectable }       from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CatsEntity }       from "../entities/cat.entity";
import { Repository }       from "typeorm";



@Injectable()
export class CatsRepository {
  constructor(
    @InjectRepository(CatsEntity)
    private readonly catsRepository: Repository<CatsEntity>
  ) {}



}