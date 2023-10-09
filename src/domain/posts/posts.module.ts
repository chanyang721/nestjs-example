import { Module }             from '@nestjs/common';
import { TypeOrmModule }      from '@nestjs/typeorm';
import { BOARD }              from '../../libs/utils/constants';
import { PostsService }       from './application/services/posts.service';
import { PostsController }    from './presentation/controllers/posts.controller';
import { CommentsService }    from './application/services/comments.service';
import { PostsRepository }    from './infrastructrue/repositories/posts.repository';
import { CommentsRepository } from './infrastructrue/repositories/comments.repository';
import { PostsEntity }        from './infrastructrue/entities/posts.entity';
import { CommentsEntity }     from './infrastructrue/entities/comments.entity';



@Module( {
    imports    : [ TypeOrmModule.forFeature( [ PostsEntity, CommentsEntity ], BOARD ) ],
    controllers: [ PostsController ],
    providers  : [
        PostsService, PostsRepository,
        
        CommentsService, CommentsRepository,
    ],
} )
export class PostsModule {
}
