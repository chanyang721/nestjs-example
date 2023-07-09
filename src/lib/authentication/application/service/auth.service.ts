import { Injectable }     from '@nestjs/common';
import { AuthRepository } from "../../infrastructure/repository/auth.repository";

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepositroy: AuthRepository
  ) {}


  public async registerUser( registerUserDto: any ) {
    
  }
}
