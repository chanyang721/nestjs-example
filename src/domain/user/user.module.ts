import { Module }         from '@nestjs/common';
import { TypeOrmModule }  from "@nestjs/typeorm";
import { MAIN }           from "../../lib/utils/constant";
import { UserController } from './presentation/controller/user.controller';
import { UserService }    from './application/service/user.service';
import { UserEntity }     from "./infrastructure/entities/user.entity";
import { UserRepository } from "./infrastructure/repository/user.repository";


@Module({
  imports: [
    TypeOrmModule.forFeature([ UserEntity ], MAIN)
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule {}
