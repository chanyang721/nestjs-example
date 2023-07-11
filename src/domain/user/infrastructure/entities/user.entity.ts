import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../lib/database/base/typeorm/base.entity";


export enum UserRole {
  UNKNOWN   = 'UNKNOWN',
  ADMIN     = 'ADMIN',
  CLIENT    = 'CLIENT',
  SELLER    = 'SELLER',
  PUBLISHER = 'PUBLISHER',
}

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.UNKNOWN,
    comment: '유저 권한'
  })
  role: UserRole;

}
