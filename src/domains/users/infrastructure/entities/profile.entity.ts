import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../../libs/database/orm/typeorm/base/base.entity";



@Entity( { name: "profile" } )
export class ProfileEntity extends BaseEntity {
    @Column( { unique: true, length: 30, comment: "유저 닉네임" } )
    nickname: string;
    
    @Column( { length: 46, comment: "유저 썸네일 S3 key" } )
    thumbnail: string;
    
    @Column( { length: 255, comment: "유저 이메일" } )
    email: string;
    
    @Column( { length: 10, comment: "핸드폰 번호" } )
    mobile: string;
}