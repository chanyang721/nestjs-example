import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CommentsEntity } from "../../infrastructrue/entities/comments.entity";



export class CreateCommentsOrReplyDto extends PickType( CommentsEntity, [ "post_id", "parent_comment_id", "writer_name", "content" ] ) {
    @IsNumber()
    @IsNotEmpty()
    post_id: number;
    
    @IsNumber()
    @IsOptional()
    parent_comment_id: number;
    
    @IsString()
    @IsNotEmpty()
    writer_name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength( 1 )
    @MaxLength( 500 )
    content: string;
}

