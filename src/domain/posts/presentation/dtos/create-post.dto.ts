import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';



export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength( 1 )
    @MaxLength( 40 )
    title: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength( 1 )
    @MaxLength( 2000 )
    content: string;
    
    @IsString()
    @IsOptional()
    writer: string;
}