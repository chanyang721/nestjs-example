import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsService } from "./application/services/comments.service";
import { PostsService } from "./application/services/posts.service";
import { CommentsEntity } from "./infrastructrue/entities/comments.entity";
import { PostsEntity } from "./infrastructrue/entities/posts.entity";
import { CommentsRepository } from "./infrastructrue/repositories/comments.repository";
import { PostsRepository } from "./infrastructrue/repositories/posts.repository";
import { PostsController } from "./presentation/controllers/posts.controller";



@Module( {
    imports    : [
        TypeOrmModule.forFeature( [ PostsEntity, CommentsEntity ] )
    ],
    controllers: [ PostsController ],
    providers  : [
        PostsService, CommentsService,
        
        PostsRepository, CommentsRepository
    ]
} )
export class PostsModule {
}
