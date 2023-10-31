import { Injectable }                    from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model }             from "mongoose";
import { PROJECT }                       from "../../../../libs/utils/constants";
import { RepositoryInject }              from "../../../../libs/utils/decoretors";
import { UserModel }                     from "../schemas/user.schema";



@Injectable()
@RepositoryInject( UserQueryRepository )
export class UserQueryRepository {
    
    constructor(
      @InjectConnection( PROJECT )
      private readonly connection: Connection,
      @InjectModel( UserModel.name, PROJECT )
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
