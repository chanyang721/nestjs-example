import { IsNumber, IsOptional, IsString } from "class-validator";



export class GetCatDto {
  @IsString()
  id: string;
}
