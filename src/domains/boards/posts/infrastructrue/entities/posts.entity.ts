import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity }                                                          from "../../../../users/infrastructure/entities/user.entity";
import { CommentsEntity }                                                      from "./comments.entity";



@Entity( { name: "post" } )
export class PostsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column( {
        type    : "varchar",
        length  : 40,
        nullable: false,
        comment : "게시글 제목"
    } )
    @Index()
    title: string;
    
    @Column( {
        type    : "varchar",
        length  : 2000,
        nullable: false,
        comment : "게시글 내용"
    } )
    @Index()
    content: string;
    
    @Column( {
        type   : "varchar",
        length : 27,
        comment: "데이터 생성 날짜"
    } )
    created_at: string = new Date().toISOString();
    
    @Column( {
        type    : "varchar",
        length  : 27,
        nullable: true,
        comment : "마지막 데이터 수정 날짜"
    } )
    updated_at: string = new Date().toISOString();
    
    @Column( {
        type    : "boolean",
        nullable: false,
        default : false,
        comment : "데이터 삭제 정보"
    } )
    is_deleted: boolean;
    
    
    @ManyToOne( () => UserEntity, {
        nullable: false,
        cascade : true
    } )
    writer: UserEntity;
    
    
    @OneToMany( () => CommentsEntity, comment => comment.post, {
        nullable: true
    } )
    comments: CommentsEntity[];
    
    
    constructor( postInput: any ) {
        Object.assign( this, postInput );
    }
}