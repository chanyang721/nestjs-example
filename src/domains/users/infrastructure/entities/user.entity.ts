import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { AuthEntity }                           from "../../../../libs/authentication/infrastructure/entities/auth.entity";
import { BaseEntity }                           from "../../../../libs/database/orm/typeorm/base/base.entity";
import { UserRole }                             from "./enums/user.enum.role";
import { GenderEnum }                           from "./enums/user.gender.enum";
import { ProfileEntity }                        from "./profile.entity";



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
    
    @Column( { length: 20 } )
    name: string;
    
    @Column( {
        type   : "enum",
        enum   : GenderEnum,
        comment: "유저 성별"
    } )
    gender: GenderEnum;
    
    @Column()
    age: number;
    
    
    @Column()
    profile_id: string;
    
    /**
     * Table Relations
     */
    @OneToOne(
      () => AuthEntity,
      ( auth ) => auth.user,
      { cascade: true } )
    auth: AuthEntity;
    
    
    @OneToOne( () => ProfileEntity )
    @JoinColumn( { name: "profile_id" } )
    profile: ProfileEntity;
    
    
    /**
     * Constructor Function
     */
    constructor( userEntity: any ) {
        super();
        Object.assign( this, userEntity );
    }
}
