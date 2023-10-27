import { EntityManager, Repository }                     from 'typeorm';
import { InjectRepository }                              from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtPayLoadDto }                                 from '../../../../libs/helpers/jwt/interface/jwt.payload.interface';
import { PagenationOptionsDto }                          from '../../presentation/dtos/pagenation-options.dto';
import { CreatePostDto }                                 from '../../presentation/dtos/create-post.dto';
import { UpdatePostDto }                                 from '../../presentation/dtos/update-post.dto';
import { SearchOptionsDto }                              from '../../presentation/dtos/search-options.dto';
import { UserEntity }                                    from '../../../users/infrastructure/entities/user.entity';
import { PostsEntity }                                   from '../entities/posts.entity';



@Injectable()
export class PostsRepository {
    private readonly logger = new Logger( PostsRepository.name );
    
    
    constructor(
        @InjectRepository( PostsEntity )
        private readonly postsRepository: Repository<PostsEntity>,
        private readonly em: EntityManager,
    ) {
    }
    
    
    async createPost( user: JwtPayLoadDto, createPostDto: CreatePostDto ) {
        // const qb = this.em.qb( PostsEntity );
        // const newPost = new PostsEntity( createPostDto );
        // newPost.writer = new UserEntity( user );
        //
        // qb.insert( newPost );
        
        try {
            // return await qb.execute();
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findOnePostById( postId: number ): Promise<PostsEntity> {
        try {
            // return await this.em.findOne( PostsEntity, {
            //     id        : postId,
            //     is_deleted: false,
            // } );
            return new PostsEntity({})
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async updatePostById( post: PostsEntity, updatePostDto: UpdatePostDto ) {
        // const updatedPost = wrap( post )
        //     .assign( updatePostDto, { mergeObjects: true } );
        
        try {
            // return await this.em.persistAndFlush( updatedPost );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findPostsBySearchAndWhereOptions( pagenationOptions: PagenationOptionsDto,
        searchOptions: SearchOptionsDto ): Promise<PostsEntity[]> {
        // const qb = this.em.qb(PostsEntity)
        // qb.select( [
        //   "p.id",
        //   "p.title",
        //   "LEFT(p.content, 1, 100) as content_preview",
        //   "COUNT(c.id) as count"
        // ] )
        //   .leftJoin( "p.comments", "c", { "p.id": "c.post_id" } )
        //   .groupBy( [ "p.id", "p.title", "content_preview" ] )
        //   .orderBy({ created_at: whereOptions.sort })
        //   .limit( whereOptions.limit )
        //   .offset( whereOptions.offset );
        //
        //
        // return await qb.execute()
        
        // const knex = this.em.getKnex();
        // const sql = `
        //       SELECT
        //           p.id,
        //           p.title,
        //           p.writer,
        //           p.created_at,
        //           LEFT(p.content, 100) AS content_preview,
        //           COUNT(c.id) AS comments_count
        //       FROM
        //           post p
        //       LEFT JOIN
        //           comment c ON p.id = c.post_id
        //       WHERE
        //           (
        //                ( :search = 'title' AND p.title LIKE :value )
        //             OR ( :search = 'writer' AND p.writer LIKE :value )
        //             OR ( :search = 'content' AND p.content LIKE :value )
        //           )
        //             AND c.parent IS NULL
        //             AND p.is_deleted = false
        //       GROUP BY
        //           p.id, p.title, content_preview
        //       ORDER BY
        //           p.created_at DESC
        //       LIMIT :limit
        //       OFFSET :offset
        // `;
        
        // const qb = knex.raw( sql, {
        //     search: searchOptions.search,
        //     value : '%' + searchOptions.value + '%',
        //     limit : +pagenationOptions.limit,
        //     offset: +pagenationOptions.offset,
        // } );
        
        
        try {
            // return await this.em.execute( qb );
            return [ new PostsEntity( {} )]
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
}