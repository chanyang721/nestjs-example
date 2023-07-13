import { Column, Entity }             from "typeorm";
import { UserAuthenticationPlatform } from "./enums/auth.enum.platform";
import { BaseEntity }                 from "../../../database/base/typeorm/base.entity";



@Entity({ name: 'auth' })
export class AuthEntity extends BaseEntity {
  @Column({
    type  : String,
    length: 100,
    unique: true,
    nullable: false,
    comment: "인증 서버 유저 아이디"
  })
  uid: string;

  @Column({
    type: 'enum',
    enum: UserAuthenticationPlatform,
    default: UserAuthenticationPlatform.ORIGIN,
    comment: "인증 플랫폼 이름"
  })
  platform: UserAuthenticationPlatform;

  @Column({
    type: String,
    length: 150,
    nullable: true,
    comment: "엑세스 토콘 리프레시용 토큰"
  })
  current_refresh_token: string;

  constructor(authEntity: AuthEntity) {
    super();
    Object.assign(this, authEntity)
  }
}
