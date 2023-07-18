import { ApiProperty } from "@nestjs/swagger";
import { IsUUID }      from "class-validator";



export class BaseModelDto {
  @ApiProperty({
    type       : 'uuid',
    description: "base schema id",
    required   : true,
    example    : "806c85de-2534-4fc9-8b2f-980e4faab60f"
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    type: Date,
    description: "base schema created at",
    required: false,
    example: "2021-09-30T07:00:00.000Z"
  })
  created_at: Date;

  @ApiProperty({
    type: Date,
    description: "base schema created at",
    required: false,
    example: "2021-09-30T07:00:00.000Z"
  })
  updated_at: Date;
}
