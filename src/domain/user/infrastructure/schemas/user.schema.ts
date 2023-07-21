import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BaseModel }                   from "../../../../lib/database/base/mongoose/base.model";



export type UserDocument = UserModel & Document;


@Schema()
export class UserModel extends BaseModel {
  @Prop() name: string;
}


export const UserSchema = SchemaFactory.createForClass(UserModel);

// UserSchema.virtual('id').get(function (this: UserDocument) {
//   return this._id;
// });
