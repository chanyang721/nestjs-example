import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity }                                       from "../../../../../libs/database/orm/typeorm/base/base.entity";
import { UserEntity }                                       from "../../../../users/infrastructure/entities/user.entity";
import { GroupEntity }                                      from "./group.entity";



@Entity( { name: "project" } )
export class ProjectEntity extends BaseEntity {
    /**
     * Table Columns
     */
    @Column( {
        comment : "프로젝트 이름",
        length  : 100,
        nullable: false
    } )
    name: string;
    
    @Column( { type: "uuid" } )
    user_id: string;
    
    
    /**
     * Table Relations
     */
    @ManyToOne(
      () => UserEntity,
      user => user.projects, {
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
      } )
    @JoinColumn( { name: "user_id" } )
    user: UserEntity;
    
    @OneToMany(
      () => GroupEntity,
      group => group.project, {
          cascade: true
      } )
    groups: GroupEntity[];
    
    
    /**
     * Constructor Function
     */
    constructor( projectEntity: any ) {
        super();
        Object.assign( this, projectEntity );
    }
}
