import { IsNotEmpty, IsString } from 'class-validator';



export class PagenationOptionsDto {
  @IsString()
  @IsNotEmpty()
  limit: string;
  
  @IsString()
  @IsNotEmpty()
  offset: string;
  
  // @IsString()
  // sort?: string = 'desc';
  
  constructor( input: PagenationOptionsDto ) {
    // this.limit = input.limit
    // this.offset = input.offset
    // this.sort = input.sort
    Object.assign( this, input );
  }
}