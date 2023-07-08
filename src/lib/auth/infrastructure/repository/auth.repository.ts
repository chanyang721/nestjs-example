import { Injectable }       from "@nestjs/common";
import { Repository }       from "typeorm";
import { UserEntity }       from "../../../../domain/user/infrastructure/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   *
   */

}