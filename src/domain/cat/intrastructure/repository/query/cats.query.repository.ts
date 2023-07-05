import { Injectable }      from "@nestjs/common";
import { InjectModel }     from "@nestjs/mongoose";
import { Document, Model } from "mongoose";
import { CatModel }        from "../../entitiy/cat.query.schema";



@Injectable()
export class CatsQueryRepository {
  constructor(
    @InjectModel(CatModel.name, "one")
    private readonly catModel: Model<CatModel>
  ) {
  }
}