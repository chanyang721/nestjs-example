import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';
import { CommentsEntity } from './comments.entity';



@Entity( { name: 'post' } )
export class PostsEntity extends BaseEntity {
  
  @IsString()
  @IsOptional()
  @MinLength( 1 )
  @MaxLength( 40 )
  @Column( { length: 40, comment: '게시글 제목' } )
  title: string;
  
  @Column( { comment: 'user id FK' } )
  @Index()
  writer_name: string;
  
  @IsString()
  @IsOptional()
  @MinLength( 1 )
  @MaxLength( 2000 )
  @Column( { type: 'longtext', comment: '게시글 내용' } )
  content: string;
  
  @Column( { default: false, comment: '데이터 삭제 정보' } )
  is_deleted: boolean;
  
  @Column( { type: 'uuid' } )
  @Index()
  user_id: string;
  
  @OneToMany( () => CommentsEntity, comment => comment.post, {
    nullable: true,
  } )
  comments: CommentsEntity[];
  
  
  constructor( postInput: any ) {
    super();
    Object.assign( this, postInput );
  }
}