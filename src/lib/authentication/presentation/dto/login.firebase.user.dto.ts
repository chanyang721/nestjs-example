import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty }                  from "@nestjs/swagger";
import { UserAuthenticationPlatform }   from "../../infrastructure/entity/enums/auth.enum.platform";



export class LoginDto {
  @ApiProperty({
    type       : String,
    description: "외부에 저장된 유저 정보를 가져올 수 있는 유저 아이디",
    required   : true,
    example    : "xoqGTR9871Nbzkd4bsEr5AZVp2"
  })
  @IsString()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    type       : String,
    description: "인증 서버 플랫폼 이름",
    required: true,
    example: "firebase"
  })
  @IsEnum(UserAuthenticationPlatform)
  @IsNotEmpty()
  platform: UserAuthenticationPlatform;
}
