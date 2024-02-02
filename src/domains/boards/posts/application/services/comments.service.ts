import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ResponseDto } from '../../../../../libs/fundamentals/interceptors/response/dto/response.dto';
import { JwtPayLoadDto } from '../../../../../libs/helpers/jwt/interface/jwt.payload.interface';
import { CommentsEntity } from '../../infrastructrue/entities/comments.entity';
import { CommentsRepository } from '../../infrastructrue/repositories/comments.repository';
import { CreateCommentsOrReplyDto } from '../../presentation/dtos/create.comment.dto';
import { PagenationOptionsDto } from '../../presentation/dtos/pagenation-options.dto';
import { UpdateCommentsOrReplyDto } from '../../presentation/dtos/update.comment.dto';



@Injectable()
export class CommentsService {
  private readonly logger = new Logger( CommentsService.name );
  
  
  constructor(
    private readonly commentsRepository: CommentsRepository,
  ) {
  }
  
  
  async createComment( user: JwtPayLoadDto,
    createCommentDto: CreateCommentsOrReplyDto ): Promise<ResponseDto<boolean>> {
    try {
      const comment = await this.commentsRepository.createComment( createCommentDto );
      
      return {
        statusCode: HttpStatus.CREATED,
        message   : '생성 성공',
        data      : !!comment,
      };
    }
    catch ( error ) {
      this.logger.error( error );
      throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
    }
  }
  
  
  async updateComment(
    user: JwtPayLoadDto,
    updateCommentsOrReplyDto: UpdateCommentsOrReplyDto,
  ): Promise<ResponseDto<boolean>> {
    try {
      const comment = await this.commentsRepository.findCommentById( updateCommentsOrReplyDto.id );
      if ( !comment ) {
        throw new HttpException( '존재하지 않는 댓글입니다', HttpStatus.BAD_REQUEST );
      }
      
      await this.commentsRepository.updateComment( updateCommentsOrReplyDto );
      
      return {
        statusCode: HttpStatus.OK,
        message   : '수정 성공',
        data      : !!comment,
      };
    }
    catch ( error ) {
      this.logger.error( error );
      throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
    }
  }
  
  
  async findCommentsByPostId(
    postId: string,
    pagenationOptionsDto: PagenationOptionsDto,
  ): Promise<CommentsEntity[]> {
    try {
      return await this.commentsRepository.findCommentsByPostId( postId, pagenationOptionsDto );
    }
    catch ( error ) {
      this.logger.error( error );
      throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
    }
  }
  
  
  async findRepliesByParent( parent: string, pagenationOptionsDto: PagenationOptionsDto ): Promise<CommentsEntity[]> {
    try {
      return await this.commentsRepository.findRepliesByParent( parent, pagenationOptionsDto );
    }
    catch ( error ) {
      this.logger.error( error );
      throw new HttpException( error.message, HttpStatus.BAD_REQUEST );
    }
  }
}