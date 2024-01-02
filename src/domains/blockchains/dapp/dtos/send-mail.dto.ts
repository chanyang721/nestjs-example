import { IsEmail, IsString } from "class-validator";



export class SendMailDto {
    @IsEmail()
    to: string
}