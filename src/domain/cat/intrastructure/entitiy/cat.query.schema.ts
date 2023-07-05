import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument }  from "mongoose";



export type CatDocument = HydratedDocument<CatModel>;


@Schema({
  collection: "cats",
  versionKey: false,
})
export class CatModel extends Document {
  @Prop({
    type    : String,
    required: false
  }) name: string;

  @Prop() age: number;

  @Prop() breed: string;
}


export const CatSchema = SchemaFactory.createForClass(CatModel);