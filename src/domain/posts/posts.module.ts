import { Module }             from '@nestjs/common';
import { PROJECT }            from '../../libs/utils/constants';
import { RepositoryModule }   from '../../libs/database/orm/typeorm/repository.module';
import { PostsController }    from './presentation/controllers/posts.controller';
import { PostsService }       from './application/services/posts.service';
import { CommentsService }    from './application/services/comments.service';
import { PostsRepository }    from './infrastructrue/repositories/posts.repository';
import { CommentsRepository } from './infrastructrue/repositories/comments.repository';



@Module( {
    imports    : [
        // TypeOrmModule.forFeature( [ PostsEntity, CommentsEntity ], BOARD )
        RepositoryModule.forFeature( [ PostsRepository, CommentsRepository ], PROJECT ),
    ],
    controllers: [ PostsController ],
    providers  : [
        PostsService,
        
        CommentsService,
    ],
} )
export class PostsModule {
}
