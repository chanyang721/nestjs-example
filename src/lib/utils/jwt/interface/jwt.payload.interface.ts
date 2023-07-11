import { IsString } from "class-validator";



export class IJwtPayLoad {
  @IsString()
  id: string
}
