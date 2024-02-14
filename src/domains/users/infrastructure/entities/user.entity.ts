import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AuthEntity } from '../../../../libs/authentication/infrastructure/entities/auth.entity';
import { BaseEntity } from '../../../../libs/database/orm/typeorm/base/base.entity';
import { USER_GENDER, USER_ROLE } from './enums';
import { ProfileEntity } from './profile.entity';



@Entity( { name: 'user' } )
export class UserEntity extends BaseEntity {
  /**
   * Table Columns
   */
  @Column( {
    type   : 'enum',
    enum   : USER_ROLE,
    default: USER_ROLE.UNKNOWN,
    comment: '유저 권한',
  } )
  role: USER_ROLE;
  
  @Column( { length: 20 } )
  name: string;
  
  @Column( {
    type   : 'enum',
    enum   : USER_GENDER,
    comment: '유저 성별',
  } )
  gender: USER_GENDER;
  
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
  
  
  @OneToOne( () => ProfileEntity, {
    eager: true,
  } )
  @JoinColumn( { name: 'profile_id' } )
  profile: ProfileEntity;
  
  
  /**
   * Constructor Function
   */
  constructor( userEntity: any ) {
    super();
    Object.assign( this, userEntity );
  }
}
