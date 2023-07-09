import { IsString } from "class-validator";



export class FirebaseUserDto {
  @IsString()
  uid: string
}
