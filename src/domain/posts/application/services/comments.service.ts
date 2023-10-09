import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtPayLoadDto }                                 from '../../../../libs/utils/jwt/interface/jwt.payload.interface';
import { CreateCommentsOrReplyDto }                      from '../../presentation/dtos/create.comment.dto';
import { CommentsRepository }                            from '../../infrastructrue/repositories/comments.repository';
import { UpdateCommentsOrReplyDto }                      from '../../presentation/dtos/update.comment.dto';
import { PagenationOptionsDto }                          from '../../presentation/dtos/pagenation-options.dto';
import { CommentsEntity }                                from '../../infrastructrue/entities/comments.entity';
import { IdAndMessageDto }                               from '../../../../libs/utils/common/dtos/common-id-and-message.dto';



@Injectable()
export class CommentsService {
    private readonly logger = new Logger( CommentsService.name );
    
    
    constructor(
        private readonly commentsRepository: CommentsRepository,
    ) {
    }
    
    
    async createComment( user: JwtPayLoadDto, createCommentDto: CreateCommentsOrReplyDto ): Promise<IdAndMessageDto> {
        try {
            const comment = await this.commentsRepository.createComment( user, createCommentDto );
            
            return {
                id     : 1,
                message: true,
            };
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async updateComment( user: JwtPayLoadDto,
        updateCommentsOrReplyDto: UpdateCommentsOrReplyDto ): Promise<IdAndMessageDto> {
        try {
            const comment = await this.commentsRepository.findCommentById( updateCommentsOrReplyDto.id );
            if ( !comment ) {
                throw new HttpException( '존재하지 않는 댓글입니다', HttpStatus.BAD_REQUEST );
            }
            
            // const isSameWriter = user.nickname === comment.writer;
            // if ( !isSameWriter ) {
            //     throw new HttpException( '작성자만 수정 가능합니다', HttpStatus.UNAUTHORIZED );
            // }
            
            await this.commentsRepository.updateComment( updateCommentsOrReplyDto );
            
            return {
                id     : updateCommentsOrReplyDto.id,
                message: true,
            };
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findCommentsByPostId( postId: number,
        pagenationOptionsDto: PagenationOptionsDto ): Promise<CommentsEntity[]> {
        try {
            return await this.commentsRepository.findCommentsByPostId( postId, pagenationOptionsDto );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
    
    
    async findRepliesByParent( parent: number, pagenationOptionsDto: PagenationOptionsDto ): Promise<CommentsEntity[]> {
        try {
            return await this.commentsRepository.findRepliesByParent( parent, pagenationOptionsDto );
        }
        catch ( error ) {
            this.logger.error( error );
            throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
        }
    }
}