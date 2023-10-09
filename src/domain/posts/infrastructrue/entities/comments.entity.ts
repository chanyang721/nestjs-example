
import { PostsEntity }                                                  from './posts.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';



@Entity( { name: 'comment' } )
export class CommentsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column( {
        type    : 'varchar',
        length  : 500,
        nullable: false,
        comment : '댓글 내용',
    } )
    content: string;
    
    @Column( {
        type    : 'varchar',
        length  : 10,
        nullable: false,
    } )
    writer: string;
    
    @Column( {
        type   : 'varchar',
        length : 27,
        comment: '데이터 생성 날짜',
    } )
    created_at: string = new Date().toISOString();
    
    @Column( {
        type    : 'varchar',
        length  : 27,
        nullable: true,
        comment : '마지막 데이터 수정 날짜',
    } )
    updated_at: string = new Date().toISOString();
    
    @Column( {
        type    : 'boolean',
        length  : 27,
        nullable: false,
        default : false,
        comment : '데이터 삭제 정보',
    } )
    is_deleted: boolean;
    
    @ManyToOne( () => PostsEntity, {

    } )
    post: PostsEntity;
    
    
    @OneToMany( () => CommentsEntity, comment => comment.parent )
    replies: CommentsEntity[];
    
    @ManyToOne( () => CommentsEntity, {
        nullable  : true,
    } )
    parent: CommentsEntity;
    
    
    constructor( commentInput: any ) {
        Object.assign( this, commentInput );
    }
}