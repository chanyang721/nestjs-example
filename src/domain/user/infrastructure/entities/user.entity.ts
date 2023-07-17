import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../lib/database/base/typeorm/base.entity";
import { UserRole }       from "./enums/user.enum.role";


@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  constructor( userEntity: any ) {
    super();
    Object.assign(this, userEntity)
  }

  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: false,
    default: UserRole.UNKNOWN,
    comment: '유저 권한'
  })
  role: UserRole;
}
