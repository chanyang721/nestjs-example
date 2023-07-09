import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../lib/database/base/typeorm/base.entity";


export enum UserRole {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER'
}


@Entity({ name: "users" })
export class UserEntity extends BaseEntity {

  @Column({
    type  : String,
    length: 100,
    unique: true,
    nullable: false,
    comment: "Cognito 유저 아이디"
  })
  uid: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.SELLER,
    comment: '유저 권한'
  })
  role: UserRole;

}
