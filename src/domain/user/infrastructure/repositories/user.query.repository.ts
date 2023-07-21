import { Model }            from "mongoose";
import { Injectable }       from "@nestjs/common";
import { InjectModel }      from "@nestjs/mongoose";
import { RepositoryInject } from "../../../../lib/utils/decoretors";
import { MAIN }             from "../../../../lib/utils/constants";
import { UserModel }        from "../schemas/user.schema";


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
