import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";



export class UpdatePostDto {
    @IsNumber()
    @IsNotEmpty()
    id!: number;
    
    @IsString()
    @IsOptional()
    @MinLength( 1 )
    @MaxLength( 40 )
    title: string;
    
    @IsString()
    @IsOptional()
    @MinLength( 1 )
    @MaxLength( 2000 )
    content: string;
    
    
    @IsBoolean()
    @IsOptional()
    is_deleted: boolean;
}