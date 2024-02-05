import { IsEmail } from 'class-validator';



export class SendMailDto {
  @IsEmail()
  to: string;
}