import { Document }                    from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BaseModel }                   from "../../../../libs/database/base/mongoose/base.model";



export type ProjectDocument = ProjectModel & Document;


@Schema({
  collection: "project"
})
export class ProjectModel extends BaseModel {
  @Prop({

  })
  name: string;

}


export const ProjectSchema = SchemaFactory.createForClass(ProjectModel);

