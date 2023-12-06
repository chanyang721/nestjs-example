import { Module }         from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule }  from "@nestjs/typeorm";
import { UserService }    from "./application/services/user.service";
import { UserEntity }     from "./infrastructure/entities/user.entity";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { UserController } from "./presentation/controllers/user.controller";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [ UserEntity ] ),
    ],
    controllers: [ UserController ],
    providers  : [
        UserService,
        UserRepository
    ]
} )
export class UserModule {
}