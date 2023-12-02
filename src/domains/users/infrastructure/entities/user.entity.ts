import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { AuthEntity }                                      from "../../../../libs/authentication/infrastructure/entities/auth.entity";
import { BaseEntity }                                      from "../../../../libs/database/orm/typeorm/base/base.entity";
import { WalletEntity }                                    from "../../../blockchains/wallets/entities/wallet.entity";
import { CommentsEntity }                                  from "../../../boards/posts/infrastructrue/entities/comments.entity";
import { ProjectEntity }                                   from "../../../boards/projects/infrastructure/entities/project.entity";
import { UserRole }                                        from "./enums/user.enum.role";



@Entity( { name: "user" } )
export class UserEntity extends BaseEntity {
    /**
     * Table Columns
     */
    @Column( {
        type   : "enum",
        enum   : UserRole,
        default: UserRole.UNKNOWN,
        comment: "유저 권한"
    } )
    role: UserRole;
    
    @Column( { length: 46, comment: "유저 썸네일 S3 key" } )
    thumbnail: string;
    
    @Column( { unique: true, length: 30, comment: "유저 닉네임" } )
    nickname: string;
    
    /**
     * Table Relations
     */
    @OneToOne(
      () => AuthEntity,
      ( auth ) => auth.user,
      { cascade: true } )
    auth: AuthEntity;
    
    
    // @OneToOne( () => WalletEntity )
    // @JoinColumn( { name: "wallet_id" } )
    // wallet: WalletEntity;
    
    // @OneToMany(
    //   () => ProjectEntity,
    //   project => project.user,
    //   { cascade: true } )
    // projects: ProjectEntity[];
    
    // @OneToMany(
    //   () => CommentsEntity,
    //   comment => comment.writer
    // )
    // comments: CommentsEntity[];
    
    
    /**
     * Constructor Function
     */
    constructor( userEntity: any ) {
        super();
        Object.assign( this, userEntity );
    }
}
