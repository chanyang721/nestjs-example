import { Connection, Model }             from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { RepositoryInject }              from '../../../../libs/utils/decoretors';
import { MAIN }                          from '../../../../libs/utils/constants';
import { UserModel }                     from '../schemas/user.schema';



@RepositoryInject( UserQueryRepository )
export class UserQueryRepository {
    
    constructor(
        @InjectConnection( MAIN )
        private readonly connection: Connection,
        @InjectModel( UserModel.name, MAIN )
        private readonly userModel: Model<UserModel>,
    ) {
    }
    
    
    public async findUserInfoWithAuth( body: any ) {
        const test = this.connection
                         .collection( 'project' )
                         .find( {
                             id: body.id,
                         } );
        
        
        return this.userModel.findById( body.id );
    }
}
