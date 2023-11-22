import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from "@nestjs/common";
import { ResponseDto }                                                     from "../../../../../libs/fundamentals/interceptors/response/dto/response.dto";
import { JwtPayLoadDto }                                                   from "../../../../../libs/helpers/jwt/interface/jwt.payload.interface";
import { CurrentUser, Public }                                             from "../../../../../libs/utils/decoretors";
import { CommentsService }                                                 from "../../application/services/comments.service";
import { PostsService }                                                    from "../../application/services/posts.service";
import { CommentsEntity }                                                  from "../../infrastructrue/entities/comments.entity";
import { PostsEntity }                                                     from "../../infrastructrue/entities/posts.entity";
import { CreatePostDto }                                                   from "../dtos/create-post.dto";
import { CreateCommentsOrReplyDto }                                        from "../dtos/create.comment.dto";
import { PagenationOptionsDto }                                            from "../dtos/pagenation-options.dto";
import { SearchPostsBySearchAndWhereOptionsDto }                           from "../dtos/search.posts.by.where.options.dto";
import { UpdatePostDto }                                                   from "../dtos/update-post.dto";
import { UpdateCommentsOrReplyDto }                                        from "../dtos/update.comment.dto";



@Controller( "posts" )
export class PostsController {
    constructor(
      private readonly commentService: CommentsService,
      private readonly postsService: PostsService
    ) {
    }
    
    
    @Public()
    @Get( "" )
    async findPosts(
      @Query() searchPostsBySearchAndWhereOptionsDto: SearchPostsBySearchAndWhereOptionsDto
    ): Promise<PostsEntity[]> {
        return await this.postsService.findPostsBySearchAndWhereOptions( searchPostsBySearchAndWhereOptionsDto );
    }
    
    
    @Public()
    @Get( "/:id" )
    async findPost(
      @Param( "id", ParseUUIDPipe ) postId: string
    ): Promise<PostsEntity> {
        return this.postsService.findPostByIdWithAllInfo( postId );
    }
    
    
    @Post( "" )
    async createPost(
      @Body() createPostDto: CreatePostDto,
      @CurrentUser() user: JwtPayLoadDto
    ): Promise<ResponseDto> {
        return this.postsService.createPost( user, createPostDto );
    }
    
    
    @Patch( "" )
    async updatePost(
      @Body() updatePostDto: UpdatePostDto,
      @CurrentUser() user: JwtPayLoadDto
    ): Promise<ResponseDto> {
        return this.postsService.updatePost( user, updatePostDto );
    }
    
    
    /**
     * Comments APIs ------------------------------------------------------
     */
    @Public()
    @Get( "/:id/comments" )
    async findComments(
      @Param( "id", ParseUUIDPipe ) postId: string,
      @Query() pagenationOptionsDto: PagenationOptionsDto
    ): Promise<CommentsEntity[]> {
        return this.commentService.findCommentsByPostId( postId, pagenationOptionsDto );
    }
    
    
    @Public()
    @Get( "/comments/:id/replies" )
    async findReplies(
      @Param( "id", ParseUUIDPipe ) commentId: string,
      @Query() pagenationOptionsDto: PagenationOptionsDto
    ): Promise<CommentsEntity[]> {
        return this.commentService.findRepliesByParent( commentId, pagenationOptionsDto );
    }
    
    
    @Post( "/comments" )
    async createCommentsOrReply(
      @Body() createCommentsOrReplyDto: CreateCommentsOrReplyDto,
      @CurrentUser() user: JwtPayLoadDto
    ): Promise<ResponseDto> {
        return this.commentService.createComment( user, createCommentsOrReplyDto );
    }
    
    
    @Patch( "comments" )
    async updateCommentsOrReply(
      @Body() updateCommentsOrReplyDto: UpdateCommentsOrReplyDto,
      @CurrentUser() user: JwtPayLoadDto
    ): Promise<ResponseDto> {
        return this.commentService.updateComment( user, updateCommentsOrReplyDto );
    }
}
