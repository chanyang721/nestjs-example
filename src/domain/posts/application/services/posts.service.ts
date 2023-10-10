import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtPayLoadDto }                                 from '../../../../libs/utils/jwt/interface/jwt.payload.interface';
import { CreatePostDto }                                 from '../../presentation/dtos/create-post.dto';
import { UpdatePostDto }                                 from '../../presentation/dtos/update-post.dto';
import { SearchPostsBySearchAndWhereOptionsDto }         from '../../presentation/dtos/search.posts.by.where.options.dto';
import { PagenationOptionsDto }                          from '../../presentation/dtos/pagenation-options.dto';
import { SearchOptionsDto }                              from '../../presentation/dtos/search-options.dto';
import { PostsRepository }                               from '../../infrastructrue/repositories/posts.repository';
import { PostsEntity }                                   from '../../infrastructrue/entities/posts.entity';
import { IdAndMessageDto }                               from '../../../../libs/utils/common/dtos/common-id-and-message.dto';



@Injectable()
export class PostsService {
    private readonly logger = new Logger( PostsService.name );
    
    
    constructor(
        private readonly postsRepository: PostsRepository,
    ) {
    }
    
    
    public async createPost( user: JwtPayLoadDto, createPostDto: CreatePostDto ): Promise<IdAndMessageDto> {
        try {
            const newPost = await this.postsRepository.createPost( user, createPostDto );
            
            return new IdAndMessageDto( {
                id     : 1,
                message: true,
            } );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findPostByIdWithAllInfo( postId: number ): Promise<PostsEntity> {
        try {
            const post = await this.postsRepository.findOnePostById( postId );
            
            if ( !post ) {
                throw new HttpException( '존재하지 않는 게시글입니다', HttpStatus.BAD_REQUEST );
            }
            
            return post;
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async updatePost( user: JwtPayLoadDto, updatePostDto: UpdatePostDto ): Promise<IdAndMessageDto> {
        try {
            const post = await this.postsRepository.findOnePostById( updatePostDto.id );
            if ( !post ) {
                throw new HttpException( '존재하지 않는 게시글입니다', HttpStatus.BAD_REQUEST );
            }
            
            // const isSameWriter = user.nickname === post.writer.nickname;
            // if ( !isSameWriter ) {
            //     throw new HttpException( '작성자만 수정 가능합니다', HttpStatus.UNAUTHORIZED );
            // }
            
            await this.postsRepository.updatePostById( post, updatePostDto );
            
            return new IdAndMessageDto( {
                id     : updatePostDto.id,
                message: true,
            } );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findPostsBySearchAndWhereOptions( searchPostsBySearchAndWhereOptionsDto: SearchPostsBySearchAndWhereOptionsDto ): Promise<PostsEntity[]> {
        try {
            const pagenationOptions = new PagenationOptionsDto( searchPostsBySearchAndWhereOptionsDto );
            const searchOptions = new SearchOptionsDto( searchPostsBySearchAndWhereOptionsDto );
            
            const posts = await this.postsRepository.findPostsBySearchAndWhereOptions( pagenationOptions, searchOptions );
            
            return posts;
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
}