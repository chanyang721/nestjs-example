import { ApiProperty, PartialType }     from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRole }                     from '../../infrastructure/entities/enums/user.enum.role';
import { BaseEntityDto }                from '../../../../libs/database/orm/typeorm/base/base.entity.dto';



export class UserEntityDto extends PartialType( BaseEntityDto ) {
    constructor( userEntityDto: UserEntityDto ) {
        super();
        Object.assign( this, userEntityDto );
    }
    
    
    @ApiProperty( {
        type       : 'enum',
        enum       : UserRole,
        description: '유저 권한',
        example    : 'USER',
    } )
    @IsEnum( UserRole )
    @IsOptional()
    role: UserRole;
    
    @ApiProperty( {
        type       : 'string',
        description: '유저 썸네일 S3 key',
        example    : '/thumbnail/thumbnail_key',
    } )
    @IsString()
    @IsOptional()
    thumbnail: string;
}