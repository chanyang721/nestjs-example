import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { AuthEntity }                          from "../../../../libs/authentication/infrastructure/entities/auth.entity";
import { BaseEntity }                          from "../../../../libs/database/orm/typeorm/base/base.entity";
import { ProjectEntity }                       from "../../../projects/infrastructure/entities/project.entity";
import { UserRole }                            from "./enums/user.enum.role";



@Entity( { name: "user" } )
export class UserEntity extends BaseEntity {
    /**
     * Table Columns
     */
    @Column( {
        type    : "enum",
        enum    : UserRole,
        nullable: false,
        default : UserRole.UNKNOWN,
        comment : "유저 권한"
    } ) role: UserRole;
    
    @Column( {
        type    : "varchar",
        length  : 46,
        nullable: false,
        comment : "유저 썸네일 S3 key"
    } ) thumbnail: string;
    /**
     * Table Relations
     */
    @OneToOne(
      () => AuthEntity,
      ( auth ) => auth.user,
      { cascade: true } )
    auth: AuthEntity;
    @OneToMany(
      () => ProjectEntity,
      project => project.user,
      { cascade: true } )
    projects: ProjectEntity[];
    

    /**
     * Constructor Function
     */
    constructor( userEntity: any ) {
        super();
        Object.assign( this, userEntity );
    }
}
