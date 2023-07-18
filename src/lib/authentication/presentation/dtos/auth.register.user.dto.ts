import { IsOptional, IsString }  from "class-validator";
import { ApiProperty, PickType } from "@nestjs/swagger";
import { AuthEntityDto }         from "./auth.entity.dto";



export class RegisterUserDto extends PickType(AuthEntityDto, [ "uid" ]) {
  @ApiProperty({
    type       : String,
    description: "인증 서버에서 발급한 id_token",
    required   : true,
    example    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  })
  @IsString()
  @IsOptional()
  id_token: string;
}