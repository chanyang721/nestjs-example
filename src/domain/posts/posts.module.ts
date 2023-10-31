import { Module }             from "@nestjs/common";
import { RepositoryModule }   from "../../libs/database/orm/typeorm/repository.module";
import { PROJECT }            from "../../libs/utils/constants";
import { CommentsService }    from "./application/services/comments.service";
import { PostsService }       from "./application/services/posts.service";
import { CommentsRepository } from "./infrastructrue/repositories/comments.repository";
import { PostsRepository }    from "./infrastructrue/repositories/posts.repository";
import { PostsController }    from "./presentation/controllers/posts.controller";



@Module( {
    imports    : [
        // TypeOrmModule.forFeature( [ PostsEntity, CommentsEntity ], BOARD )
        RepositoryModule.forFeature( [ PostsRepository, CommentsRepository ], PROJECT )
    ],
    controllers: [ PostsController ],
    providers  : [
        PostsService,
        
        CommentsService
    ]
} )
export class PostsModule {
}
