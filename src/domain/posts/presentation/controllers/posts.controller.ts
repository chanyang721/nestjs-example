import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PostsService }                                     from '../../application/services/posts.service';
import { User }                                             from '../../../../libs/utils/decoretors';
import { JwtPayLoadDto }                                    from '../../../../libs/utils/jwt/interface/jwt.payload.interface';
import { Public }                                           from '../../../../libs/utils/decoretors';
import { IdAndMessageDto }                                  from '../../../../libs/utils/common/dtos/common-id-and-message.dto';
import { CreatePostDto }                                    from '../dtos/create-post.dto';
import { UpdatePostDto }                                    from '../dtos/update-post.dto';
import { SearchPostsBySearchAndWhereOptionsDto }            from '../dtos/search.posts.by.where.options.dto';
import { CreateCommentsOrReplyDto }                         from '../dtos/create.comment.dto';
import { UpdateCommentsOrReplyDto }                         from '../dtos/update.comment.dto';
import { PagenationOptionsDto }                             from '../dtos/pagenation-options.dto';
import { ParamsIdDto }                                      from '../dtos/params-id.dto';
import { CommentsService }                                  from '../../application/services/comments.service';
import { PostsEntity }                                      from '../../infrastructrue/entities/posts.entity';
import { CommentsEntity }                                   from '../../infrastructrue/entities/comments.entity';



@Controller( 'posts' )
export class PostsController {
    constructor(
        private readonly commentService: CommentsService,
        private readonly postsService: PostsService,
    ) {
    }
    
    
    @Public()
    @Get( '' )
    async findPosts(
        @Query() searchPostsBySearchAndWhereOptionsDto: SearchPostsBySearchAndWhereOptionsDto,
    ): Promise<PostsEntity[]> {
        return await this.postsService.findPostsBySearchAndWhereOptions( searchPostsBySearchAndWhereOptionsDto );
    }
    
    
    @Public()
    @Get( '/:id' )
    async findPost(
        @Param() params: ParamsIdDto,
    ): Promise<PostsEntity> {
        return this.postsService.findPostByIdWithAllInfo( +params.id );
    }
    
    
    @Post( '' )
    async createPost(
        @Body() createPostDto: CreatePostDto,
        @User() user: JwtPayLoadDto,
    ): Promise<IdAndMessageDto> {
        return this.postsService.createPost( user, createPostDto );
    }
    
    
    @Patch( '' )
    async updatePost(
        @Body() updatePostDto: UpdatePostDto,
        @User() user: JwtPayLoadDto,
    ): Promise<IdAndMessageDto> {
        return this.postsService.updatePost( user, updatePostDto );
    }
    
    
    /**
     * Comments APIs ------------------------------------------------------
     */
    @Public()
    @Get( '/:id/comments' )
    async findComments(
        @Param() params: ParamsIdDto,
        @Query() pagenationOptionsDto: PagenationOptionsDto,
    ): Promise<CommentsEntity[]> {
        return this.commentService.findCommentsByPostId( +params.id, pagenationOptionsDto );
    }
    
    
    @Public()
    @Get( '/comments/:id/replies' )
    async findReplies(
        @Param() parent: ParamsIdDto,
        @Query() pagenationOptionsDto: PagenationOptionsDto,
    ): Promise<CommentsEntity[]> {
        return this.commentService.findRepliesByParent( +parent.id, pagenationOptionsDto );
    }
    
    
    @Post( '/comments' )
    async createCommentsOrReply(
        @Body() createCommentsOrReplyDto: CreateCommentsOrReplyDto,
        @User() user: JwtPayLoadDto,
    ): Promise<IdAndMessageDto> {
        return this.commentService.createComment( user, createCommentsOrReplyDto );
    }
    
    
    @Patch( 'comments' )
    async updateCommentsOrReply(
        @Body() updateCommentsOrReplyDto: UpdateCommentsOrReplyDto,
        @User() user: JwtPayLoadDto,
    ): Promise<IdAndMessageDto> {
        return this.commentService.updateComment( user, updateCommentsOrReplyDto );
    }
}
