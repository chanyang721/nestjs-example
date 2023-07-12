import { IsUUID } from "class-validator";



export class BaseEntityDto {
  @IsUUID()
  id: String;
}
