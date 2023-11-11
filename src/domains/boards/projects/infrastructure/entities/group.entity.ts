import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity }                                       from "../../../../../libs/database/orm/typeorm/base/base.entity";
import { FileEntity }                                       from "./file.entity";
import { ProjectEntity }                                    from "./project.entity";



@Entity( { name: "group" } )
export class GroupEntity extends BaseEntity {
    /**
     * Table Columns
     */
    @Column( {
        comment : "그룹에 할당된 link",
        type    : "varchar",
        length  : 250,
        nullable: true
    } ) access_link: string;
    @Column( {
        comment : "링크 접근 비밀번호, group_id의 첫 6문자",
        type    : "varchar",
        length  : 150,
        nullable: true
    } ) password: string;
    @Column( {
        comment : "연결된 프로젝트의 아이디",
        type    : "uuid",
        length  : 36,
        nullable: false
    } ) project_id: string;
    /**
     * Table Relations
     */
    @ManyToOne(
      () => ProjectEntity,
      project => project.groups,
      {
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
      } )
    @JoinColumn( { name: "project_id" } )
    project: ProjectEntity;
    @OneToMany(
      () => FileEntity,
      file => file.group,
      { cascade: true } )
    files: FileEntity[];
    
    
    /**
     * Constructor Function
     */
    constructor( groupEntity: any ) {
        super();
        Object.assign( this, groupEntity );
    }
}
