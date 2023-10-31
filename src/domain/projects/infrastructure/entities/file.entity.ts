import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity }                                              from "../../../../libs/database/orm/typeorm/base/base.entity";
import { GroupEntity }                                             from "./group.entity";



@Entity( { name: "file" } )
export class FileEntity extends BaseEntity {
    
    @Column( {
        comment : "파일 이름",
        type    : "varchar",
        length  : 100,
        nullable: true
    } ) original_name: string;
    
    @Column( {
        comment : "디폴트 이미지 s3 url",
        nullable: true
    } ) thumbnail: string;
    
    @Column( {
        comment : "파일 용량, 단위 byte",
        nullable: false
    } ) size: string;
    
    @Column( {
        comment : "s3 .glb file key",
        type    : "varchar",
        length  : 100,
        nullable: false
    } ) glb_s3_key: string;
    
    @Column( {
        comment : "s3 .usd file key",
        type    : "varchar",
        length  : 100,
        nullable: false
    } ) usd_s3_key: string;
    
    
    @DeleteDateColumn( { nullable: true } )
    deleted_at: Date;
    
    @Column( {
        comment : "그룹 번호 - uuid v4",
        type    : "uuid",
        length  : 36,
        nullable: false
    } ) group_id: string;
    
    @ManyToOne( () => GroupEntity, group => group.files, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    } )
    @JoinColumn( { name: "group_id" } )
    group: GroupEntity;
    
}
