import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { JwtPayLoadDto }                                    from "../../../../libs/helpers/jwt/interface/jwt.payload.interface";
import { IdAndMessageDto }                                  from "../../../../libs/utils/common/dtos/common-id-and-message.dto";
import { CurrentUser, Public }                              from "../../../../libs/utils/decoretors";
import { CommentsService }                                  from "../../application/services/comments.service";
import { PostsService }                                     from "../../application/services/posts.service";
import { CommentsEntity }                                   from "../../infrastructrue/entities/comments.entity";
import { PostsEntity }                                      from "../../infrastructrue/entities/posts.entity";
import { CreatePostDto }                                    from "../dtos/create-post.dto";
import { CreateCommentsOrReplyDto }                         from "../dtos/create.comment.dto";
import { PagenationOptionsDto }                             from "../dtos/pagenation-options.dto";
import { ParamsIdDto }                                      from "../dtos/params-id.dto";
import { SearchPostsBySearchAndWhereOptionsDto }            from "../dtos/search.posts.by.where.options.dto";
import { UpdatePostDto }                                    from "../dtos/update-post.dto";
import { UpdateCommentsOrReplyDto }                         from "../dtos/update.comment.dto";



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
    @Param() params: ParamsIdDto
  ): Promise<PostsEntity> {
    return this.postsService.findPostByIdWithAllInfo( +params.id );
  }
  
  
  @Post( "" )
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @CurrentUser() user: JwtPayLoadDto
  ): Promise<IdAndMessageDto> {
    return this.postsService.createPost( user, createPostDto );
  }
  
  
  @Patch( "" )
  async updatePost(
    @Body() updatePostDto: UpdatePostDto,
    @CurrentUser() user: JwtPayLoadDto
  ): Promise<IdAndMessageDto> {
    return this.postsService.updatePost( user, updatePostDto );
  }
  
  
  /**
   * Comments APIs ------------------------------------------------------
   */
  @Public()
  @Get( "/:id/comments" )
  async findComments(
    @Param() params: ParamsIdDto,
    @Query() pagenationOptionsDto: PagenationOptionsDto
  ): Promise<CommentsEntity[]> {
    return this.commentService.findCommentsByPostId( +params.id, pagenationOptionsDto );
  }
  
  
  @Public()
  @Get( "/comments/:id/replies" )
  async findReplies(
    @Param() parent: ParamsIdDto,
    @Query() pagenationOptionsDto: PagenationOptionsDto
  ): Promise<CommentsEntity[]> {
    return this.commentService.findRepliesByParent( +parent.id, pagenationOptionsDto );
  }
  
  
  @Post( "/comments" )
  async createCommentsOrReply(
    @Body() createCommentsOrReplyDto: CreateCommentsOrReplyDto,
    @CurrentUser() user: JwtPayLoadDto
  ): Promise<IdAndMessageDto> {
    return this.commentService.createComment( user, createCommentsOrReplyDto );
  }
  
  
  @Patch( "comments" )
  async updateCommentsOrReply(
    @Body() updateCommentsOrReplyDto: UpdateCommentsOrReplyDto,
    @CurrentUser() user: JwtPayLoadDto
  ): Promise<IdAndMessageDto> {
    return this.commentService.updateComment( user, updateCommentsOrReplyDto );
  }
}
