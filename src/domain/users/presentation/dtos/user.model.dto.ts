import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEnum, IsOptional }       from "class-validator";
import { BaseModelDto }             from "../../../../libs/database/orm/mongoose/base/mongoose/base.model.dto";
import { UserRole }                 from "../../infrastructure/entities/enums/user.enum.role";



export class UserModelDto extends PartialType( BaseModelDto ) {
    @ApiProperty( {
        type       : "enum",
        enum       : UserRole,
        description: "유저 권한",
        example    : "USER"
    } )
    @IsEnum( UserRole )
    @IsOptional()
    role: UserRole;
    
    
    constructor( userModelDto: UserModelDto ) {
        super();
        Object.assign( this, userModelDto );
    }
    
    // @ApiProperty({
    //
    // })
    // auth: any
    
}
