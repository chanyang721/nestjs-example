import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PostsSearchOptions } from './search.posts.by.where.options.dto';



export class SearchOptionsDto {
  @IsEnum( PostsSearchOptions )
  @IsOptional()
  search: PostsSearchOptions;
  
  @IsString()
  @IsOptional()
  value: string;
  
  
  constructor( input: SearchOptionsDto ) {
    this.search = input.search;
    this.value = input.value;
    // Object.assign(this, input)
  }
  
}
