import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { BaseEntityDto } from "../../../../libs/database/orm/typeorm/base/base.entity.dto";
import { USER_ROLE } from "../../infrastructure/entities/enums";



export class UserEntityDto extends PartialType( BaseEntityDto ) {
    @ApiProperty( {
        type       : "enum",
        enum       : USER_ROLE,
        description: "유저 권한",
        example    : "USER"
    } )
    @IsEnum( USER_ROLE )
    @IsOptional()
    role: USER_ROLE;
    @ApiProperty( {
        type       : "string",
        description: "유저 썸네일 S3 key",
        example    : "/thumbnail/thumbnail_key"
    } )
    @IsString()
    @IsOptional()
    thumbnail: string;
    
    
    constructor( userEntityDto: UserEntityDto ) {
        super();
        Object.assign( this, userEntityDto );
    }
}
