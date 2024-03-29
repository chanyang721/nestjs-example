import { ProfileEntity, UserEntity } from '@/users/infrastructure/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './application/services/user.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { UserController } from './presentation/controllers/user.controller';



@Module( {
  imports    : [
    TypeOrmModule.forFeature( [ UserEntity, ProfileEntity ] ),
  ],
  controllers: [ UserController ],
  providers  : [
    UserService,
    UserRepository,
  ],
} )
export class UserModule {
}