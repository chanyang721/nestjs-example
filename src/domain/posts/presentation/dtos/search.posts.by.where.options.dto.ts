import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';



export enum PostsSearchOptions {
    title = 'title',
    content = 'content',
    writer = 'writer'
}


export class SearchPostsBySearchAndWhereOptionsDto {
    @IsEnum( PostsSearchOptions )
    @IsOptional()
    search: PostsSearchOptions;
    
    @IsString()
    @IsOptional()
    value: string;
    
    @IsString()
    @IsNotEmpty()
    limit!: string;
    
    @IsString()
    @IsNotEmpty()
    offset!: string;
    
    @IsString()
    sort?: string = 'desc';
}