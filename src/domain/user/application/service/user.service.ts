import { Injectable }     from "@nestjs/common";
import { UserRepository } from "../../infrastructure/repository/user.repository";



@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {
  }


  public async findUser(id: string) {
    return await this.userRepository.findUserById(id);
  }
}
