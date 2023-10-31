import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository }                              from "@nestjs/typeorm";
import { EntityManager, Repository }                     from "typeorm";
import { JwtPayLoadDto }                                 from "../../../../libs/helpers/jwt/interface/jwt.payload.interface";
import { CreateCommentsOrReplyDto }                      from "../../presentation/dtos/create.comment.dto";
import { PagenationOptionsDto }                          from "../../presentation/dtos/pagenation-options.dto";
import { UpdateCommentsOrReplyDto }                      from "../../presentation/dtos/update.comment.dto";
import { CommentsEntity }                                from "../entities/comments.entity";



@Injectable()
export class CommentsRepository {
    private readonly logger = new Logger( CommentsRepository.name );
    
    
    constructor(
      @InjectRepository( CommentsEntity )
      private readonly commentsRepository: Repository<CommentsEntity>,
      private readonly em: EntityManager
    ) {
    }
    
    
    async createComment( user: JwtPayLoadDto, createCommentsOrReplyDto: CreateCommentsOrReplyDto ) {
        // const qb = this.em.qb( CommentsEntity );
        // const { post_id, parent } = createCommentsOrReplyDto;
        //
        // const commentData = {
        //     ...createCommentsOrReplyDto,
        //     writer: user.nickname,
        //     post  : new PostsEntity( { id: post_id } ),
        //     parent: new CommentsEntity( { id: parent } ),
        // };
        //
        // const newComment = new CommentsEntity( commentData );
        //
        // qb.insert( newComment );
        
        try {
            // return await qb.execute();
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findCommentById( commentId: number ): Promise<CommentsEntity> {
        try {
            // return await this.em.findOne( CommentsEntity, {
            //     id        : commentId,
            //     is_deleted: false,
            // } );
            return new CommentsEntity( {} );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async updateComment( updateCommentsOrReplyDto: UpdateCommentsOrReplyDto ) {
        // const comment = await this.em.findOneOrFail( CommentsEntity, { id: updateCommentsOrReplyDto.id } );
        
        // const updatedComment = wrap( comment )
        //     .assign( updateCommentsOrReplyDto, { mergeObjects: true } );
        
        
        try {
            // return await this.em.persistAndFlush( updatedComment );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findCommentsByPostId( postId: number,
      pagenationOptionsDto: PagenationOptionsDto ): Promise<CommentsEntity[]> {
        // const qb = await this.em.qb( CommentsEntity );
        // const comments = await this.em.find( PostsEntity, {
        //   id: postId,
        // }, {
        //   populate: [ "comments" ],
        //   limit: Number(pagenationOptionsDto.limit),
        //   offset: Number(pagenationOptionsDto.offset),
        //   fields: [ 'comments' ],
        // } );
        //
        // const knex = this.em.getKnex();
        // const sql = `
        //       SELECT
        //           *
        //       FROM
        //           comment c
        //       WHERE
        //             c.post_id = :id
        //             AND c.parent IS NULL
        //             AND c.is_deleted = false
        //       ORDER BY
        //           c.created_at DESC
        //       LIMIT :limit
        //       OFFSET :offset
        // `;
        
        // const qb = knex.raw( sql, {
        //     id    : postId,
        //     limit : +pagenationOptionsDto.limit,
        //     offset: +pagenationOptionsDto.offset,
        // } );
        
        try {
            // return await this.em.execute( qb );
            return [ new CommentsEntity( {} ) ];
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findRepliesByParent( parent: number, pagenationOptionsDto: PagenationOptionsDto ): Promise<CommentsEntity[]> {
        // const knex = this.em.getKnex();
        // const sql = `
        //       SELECT
        //           *
        //       FROM
        //           comment c
        //       WHERE
        //             c.parent = ${ parent }
        //             AND c.parent IS NOT NULL
        //             AND c.is_deleted = false
        //       ORDER BY
        //           c.created_at DESC
        //       LIMIT :limit
        //       OFFSET :offset
        // `;
        //
        // const qb = knex.raw( sql, {
        //     limit : +pagenationOptionsDto.limit,
        //     offset: +pagenationOptionsDto.offset,
        // } );
        
        
        try {
            // return await this.em.execute( qb );
            return [ new CommentsEntity( {} ) ];
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.text, HttpStatus.BAD_REQUEST );
        }
    }
}