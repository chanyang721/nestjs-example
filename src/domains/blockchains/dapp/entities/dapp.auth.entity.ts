import { ApplicationForm, ApplicationFormDapp } from '@/blockchains/applicationForms/infrasturcture/entities';
import { Dapp } from '@/blockchains/dapp/entities/dapp.entity';
import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';


@Entity({ name: 'dapp_auth' })
export class DappAuth extends BaseEntity {
  
  @IsString()
  @IsNotEmpty()
  @MinLength( 1 )
  @MaxLength( 5 )
  @Column( { length: 10, comment: 'dapp 인증 코드, ex) 00001' } )
  verification_code: string;
  
  /**/
  @Column({ nullable: true, comment: '신청 contract 까지 추가되는 경우 실제 Dapp 테이블에 데이터 추가' })
  dapp_id: string
  
  @Column({ comment: '신청 contract가 발급되지 않은 상태인 "디앱 등록 완료"인 경우에 생성' })
  application_form_dapp_id: string
  
  /*
  * Relations
  * */
  @OneToOne(() => Dapp, {
    nullable: true
  })
  @JoinColumn({ name: 'dapp_id' })
  dapp: Dapp
  
  @ManyToOne(() => ApplicationFormDapp, application_form_dapp => application_form_dapp.dapp_auth)
  @JoinColumn({ name: 'application_form_dapp_id' })
  application_form_dapp: ApplicationFormDapp
  
}