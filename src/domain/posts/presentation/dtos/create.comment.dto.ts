import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';



export class CreateCommentsOrReplyDto {
    @IsNumber()
    @IsNotEmpty()
    post_id: number;
    
    
    @IsNumber()
    @IsOptional()
    parent: number;
    
    @IsString()
    @IsNotEmpty()
    @MinLength( 1 )
    @MaxLength( 500 )
    content: string;
}

