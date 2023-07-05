import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument }  from 'mongoose';

export type CatDocument = HydratedDocument<CatModel>;

@Schema()
export class CatModel {
  @Prop({
    type: mongoose.Schema.Types.String,
    required: false,
  })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(CatModel);