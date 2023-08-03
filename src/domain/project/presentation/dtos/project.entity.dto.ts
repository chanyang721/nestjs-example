import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty }                                 from "@nestjs/swagger";



export class ProjectEntityDto {

  @ApiProperty({
    type: 'uuid',
    required: false,
    description: "이미 생성된 프로젝트 아이디",
    example    : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "프로젝트 이름",
    example    : "23/2/22 시작 프로젝트",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  // @RegExp()
  name!: string;

}
