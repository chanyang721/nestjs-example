import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserAuthenticationPlatform }               from "../../infrastructure/entity/enums/auth.enum.platform";



export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  uid: string

  @IsEnum(UserAuthenticationPlatform)
  @IsNotEmpty()
  platform: UserAuthenticationPlatform;

  @IsString()
  @IsOptional()
  id_token: string;
}
