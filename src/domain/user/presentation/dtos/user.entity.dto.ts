import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEnum, IsOptional }       from "class-validator";
import { UserRole }      from "../../infrastructure/entities/enums/user.enum.role";
import { BaseEntityDto } from "../../../../libs/database/base/typeorm/base.entity.dto";



export class UserEntityDto extends PartialType(BaseEntityDto) {
  constructor(userEntityDto: UserEntityDto) {
    super();
    Object.assign(this, userEntityDto)
  }

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
