import { ApiProperty }        from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { UserRole }           from "../../infrastructure/entities/enums/user.enum.role";



export class UserEntityDto {
  @ApiProperty({
    type       : "enum",
    enum       : UserRole,
    description: "유저 권한",
    example    : "USER"
  })
  @IsEnum(UserRole)
  @IsOptional()
  role: UserRole;

}
