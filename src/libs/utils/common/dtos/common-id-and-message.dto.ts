import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';



export class IdAndMessageDto {
    @IsNumber()
    @IsOptional()
    id: number;
    
    @IsBoolean()
    @IsNotEmpty()
    message: boolean;
    
    
    constructor( input: IdAndMessageDto ) {
        this.id = input.id;
        this.message = input.message;
        // Object.assign(this, input)
    }
}