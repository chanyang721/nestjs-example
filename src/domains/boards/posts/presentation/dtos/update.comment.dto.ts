import { PickType } from '@nestjs/mapped-types';
import { CommentsEntity } from '../../infrastructrue/entities/comments.entity';



export class UpdateCommentsOrReplyDto extends PickType( CommentsEntity, [ 'id', 'content' ] ) {
}

