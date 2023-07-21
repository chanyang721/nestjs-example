import { Connection, Model }             from "mongoose";
import { Injectable }                    from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { RepositoryInject }              from "../../../../lib/utils/decoretors";
import { MAIN }                          from "../../../../lib/utils/constants";
import { UserModel }                     from "../schemas/user.schema";



@RepositoryInject(UserQueryRepository)
export class UserQueryRepository {

  constructor(
    @InjectConnection(MAIN)
    private readonly connection: Connection,
    @InjectModel(UserModel.name, MAIN)
    private readonly userModel: Model<UserModel>
  ) {
  }


  public async findUserInfoWithAuth( body: any ) {
    const test = await this.connection
                           .collection("project")
                           .find({
                             id: body.id
                           });
    console.log(test);
    return this.userModel.findById(body.id);
  }
}
