import { Module }           from '@nestjs/common';
import { MAIN }             from "../../lib/utils/constants";
import { RepositoryModule } from "../../lib/database/repository.module";
import { UserController } from './presentation/controllers/user.controller';
import { UserService }    from './application/services/user.service';
import { UserRepository } from "./infrastructure/repositories/user.repository";


@Module({
  imports: [
    RepositoryModule.forRoot([ UserRepository ], MAIN)
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
