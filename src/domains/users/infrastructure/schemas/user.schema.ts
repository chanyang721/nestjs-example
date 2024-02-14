import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseModel } from '../../../../libs/database/orm/mongoose/base/mongoose/base.model';



export type UserDocument = HydratedDocument<UserModel>;


@Schema()
export class UserModel extends BaseModel {
  @Prop( {
    type    : String,
    required: true,
  } )
  name: string;
  
  @Prop( {
    type    : String,
    required: true,
  } )
  address: string;
}


export const UserSchema = SchemaFactory.createForClass( UserModel );

UserSchema.virtual( 'id' )
          .get( function( this: UserDocument ) {
            return this._id;
          } );
