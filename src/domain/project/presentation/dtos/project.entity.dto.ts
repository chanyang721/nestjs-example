import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty }          from "@nestjs/swagger";



export class ProjectEntityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
