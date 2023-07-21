import { BaseModelDto }             from "../../../../lib/database/base/mongoose/base.model.dto";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { UserRole }                 from "../../infrastructure/entities/enums/user.enum.role";
import { IsEnum, IsOptional }       from "class-validator";



export class UserModelDto extends PartialType(BaseModelDto) {
  constructor(userModelDto: UserModelDto) {
    super();
    Object.assign(this, userModelDto)
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

  // @ApiProperty({
  //
  // })
  // auth: any

}
