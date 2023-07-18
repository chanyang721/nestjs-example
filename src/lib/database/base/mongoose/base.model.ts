import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Timestamps }                  from "./timestamps.model";

export type BaseDocument = BaseModel & Document;

@Schema()
export class BaseModel {
  @Prop()
  _id: string;

  @Prop()
  timestamps: Timestamps;
}

const BaseSchema = SchemaFactory.createForClass(BaseModel);

// BaseSchema.virtual("id").get(function (this: BaseDocument) {
//   return this._id;
// })
