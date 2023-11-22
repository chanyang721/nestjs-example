import { CACHE_MANAGER }                                         from "@nestjs/cache-manager";
import { HttpException, HttpStatus, Inject, Injectable, Logger } from "@nestjs/common";
import { Cache }                                                 from "cache-manager";
import { ResponseDto }                                           from "../../../../../libs/fundamentals/interceptors/response/dto/response.dto";
import { JwtPayLoadDto }                                         from "../../../../../libs/helpers/jwt/interface/jwt.payload.interface";
import { PostsEntity }                                           from "../../infrastructrue/entities/posts.entity";
import { PostsRepository }                                       from "../../infrastructrue/repositories/posts.repository";
import { CreatePostDto }                                         from "../../presentation/dtos/create-post.dto";
import { PagenationOptionsDto }                                  from "../../presentation/dtos/pagenation-options.dto";
import { SearchOptionsDto }                                      from "../../presentation/dtos/search-options.dto";
import { SearchPostsBySearchAndWhereOptionsDto }                 from "../../presentation/dtos/search.posts.by.where.options.dto";
import { UpdatePostDto }                                         from "../../presentation/dtos/update-post.dto";



@Injectable()
export class PostsService {
    private readonly logger = new Logger( PostsService.name );
    
    
    constructor(
      private readonly postsRepository: PostsRepository,
      @Inject( CACHE_MANAGER )
      private readonly cacheManager: Cache
    ) {
    }
    
    
    public async createPost( user: JwtPayLoadDto, createPostDto: CreatePostDto ): Promise<ResponseDto> {
        try {
            const newPost = await this.postsRepository.createPost( user, createPostDto );
            
            return new ResponseDto( {
                statusCode: HttpStatus.CREATED,
                message   : "생성 성공",
                data      : !!newPost
            } );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findPostByIdWithAllInfo( postId: string ): Promise<PostsEntity> {
        try {
            const post = await this.postsRepository.findOnePostById( postId );
            if ( !post ) {
                throw new HttpException( "존재하지 않는 게시글입니다", HttpStatus.BAD_REQUEST );
            }
            
            return post;
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async updatePost( user: JwtPayLoadDto, updatePostDto: UpdatePostDto ): Promise<ResponseDto> {
        try {
            const post = await this.postsRepository.findOnePostById( updatePostDto.id );
            if ( !post ) {
                throw new HttpException( "존재하지 않는 게시글입니다", HttpStatus.BAD_REQUEST );
            }
            
            await this.postsRepository.updatePostById( post, updatePostDto );
            
            return new ResponseDto( {
                statusCode: HttpStatus.OK,
                message   : "수정 성공",
                data      : !!post
            } );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findPostsBySearchAndWhereOptions( searchPostsBySearchAndWhereOptionsDto: SearchPostsBySearchAndWhereOptionsDto ): Promise<PostsEntity[]> {
        try {
            const pageOptions = new PagenationOptionsDto( searchPostsBySearchAndWhereOptionsDto );
            const searchOptions = new SearchOptionsDto( searchPostsBySearchAndWhereOptionsDto );
            
            const posts = await this.postsRepository.findPostsBySearchAndWhereOptions( pageOptions, searchOptions );
            
            return posts;
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
}
