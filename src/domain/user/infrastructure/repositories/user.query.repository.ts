import { RepositoryInject } from "../../../../lib/utils/decoretors/repository.decoretor";
import { InjectModel }      from "@nestjs/mongoose";
import { UserModel }        from "../schemas/user.schema";
import { Model }            from "mongoose";
import { MAIN }             from "../../../../lib/utils/constants";
import { Injectable }       from "@nestjs/common";


@Injectable()
@RepositoryInject(UserQueryRepository)
export class UserQueryRepository {

  constructor(
    @InjectModel(UserModel.name, MAIN)
    private readonly userModel: Model<UserModel>
  ) {
  }


  public async findUserInfoWithAuth( body: any ) {
    return this.userModel.findById(body.id);
  }
}
