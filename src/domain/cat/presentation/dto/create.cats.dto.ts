import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";



export class CreateOrUpdateCatDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  @IsOptional()
  breed: boolean;
}