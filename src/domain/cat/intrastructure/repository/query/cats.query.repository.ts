import { Injectable }  from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model }    from "mongoose";
import { CatModel } from "../../entitiy/cat.query.schema";



@Injectable()
export class CatsQueryRepository {
  constructor(
    @InjectModel(CatModel.name, 'cats')
    private readonly catModel: Model<CatModel>
  ) {}
}