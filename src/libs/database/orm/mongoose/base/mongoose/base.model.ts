import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



export type BaseDocument = BaseModel & Document;

export class Timestamps {
  @Prop( { type: Date, default: Date.now } )
  created_at: Date;
  
  @Prop( { type: Date, default: Date.now } )
  updated_at: Date;
  
  @Prop( { type: Date, default: Date.now } )
  deleted_at: Date;
}


@Schema()
export class BaseModel {
  @Prop()
  id: string;
  
  @Prop()
  timestamps: Timestamps;
}


const BaseSchema = SchemaFactory.createForClass( BaseModel );

// BaseSchema.virtual("id").get(function (this: BaseDocument) {
//   return this._id;
// })
