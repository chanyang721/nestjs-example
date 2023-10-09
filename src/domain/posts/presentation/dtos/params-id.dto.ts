import { IsNotEmpty, IsNumber, IsString } from 'class-validator';



export class ParamsIdDto {
    @IsString()
    @IsNotEmpty()
    id: string;
}