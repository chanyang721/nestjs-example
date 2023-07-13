import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../lib/database/base/typeorm/base.entity";
import { UserRole }       from "./enums/user.enum.role";


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
