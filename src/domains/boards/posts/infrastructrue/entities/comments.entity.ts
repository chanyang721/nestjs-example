import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../../../libs/database/orm/typeorm/base/base.entity";
import { PostsEntity } from "./posts.entity";



@Entity( { name: "comment" } )
export class CommentsEntity extends BaseEntity {
    /* columns */
    @IsString()
    @IsNotEmpty()
    @MinLength( 1 )
    @MaxLength( 500 )
    @Column( { length: 500, comment: "댓글 내용" } )
    content: string;
    
    @IsString()
    @IsNotEmpty()
    @Column( { comment: "user nick name FK" } )
    @Index()
    writer_name: string;
    
    @IsUUID()
    @IsNotEmpty()
    @Column( { comment: "post id FK" } )
    post_id: number;
    
    @IsUUID()
    @IsOptional()
    @Column( { nullable: true, comment: "comment parent id FK" } )
    parent_comment_id: number;
    
    @IsBoolean()
    @IsOptional()
    @Column( { default: false, comment: "데이터 삭제 정보" } )
    is_deleted: boolean;
    
    /* relations */
    
    // @ManyToOne( () => UserEntity, user => user.comments, {
    //     nullable: false
    // } )
    // @JoinColumn( { name: "writer_name", referencedColumnName: "nickname" } )
    // writer: UserEntity;
    
    @ManyToOne( () => PostsEntity, {
        nullable: false
    } )
    @JoinColumn( { name: "post_id" } )
    post: PostsEntity;
    
    @OneToMany( () => CommentsEntity, comment => comment.parent )
    replies: CommentsEntity[];
    
    @ManyToOne( () => CommentsEntity, {
        nullable: true
    } )
    @JoinColumn( { name: "parent_comment_id" } )
    parent: CommentsEntity;
    
    
    /* contractor */
    constructor( commentInput: any ) {
        super();
        Object.assign( this, commentInput );
    }
}