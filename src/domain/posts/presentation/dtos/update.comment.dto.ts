import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";



export class UpdateCommentsOrReplyDto {
    @IsNumber()
    @IsNotEmpty()
    id!: number;
    
    @IsString()
    @IsOptional()
    @MinLength( 1 )
    @MaxLength( 500 )
    content: string;
    
    @IsBoolean()
    @IsOptional()
    is_deleted: boolean;
}

