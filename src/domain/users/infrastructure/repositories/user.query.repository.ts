import { Injectable }                    from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model }             from "mongoose";
import { PROJECT }                       from "../../../../libs/utils/constants";
import { IUserQueryRepositoryAdapter }   from "../interfaces/user.repository.interface";
import { UserModel }                     from "../schemas/user.schema";



@Injectable()
export class UserQueryRepository
  implements IUserQueryRepositoryAdapter {
    
    constructor(
      @InjectConnection()
      private readonly connection: Connection,
      @InjectModel( UserModel.name )
      private readonly userModel: Model<UserModel>
    ) {
    }
    
    
    public async findUserInfoWithAuth( body: any ) {
        const test = this.connection
                         .collection( "project" )
                         .find( {
                             id: body.id
                         } );
        
        
        return this.userModel.findById( body.id );
    }
}
