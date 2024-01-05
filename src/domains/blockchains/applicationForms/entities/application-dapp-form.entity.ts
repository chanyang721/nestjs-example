import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'application_dapp_form' })
export class ApplicationDappForm {
  @PrimaryGeneratedColumn()
  id: number;

  /*
   * Dapp Columns
   * */
  @Column()
  name: string; //dApp 이름

  @Column({ nullable: true })
  companyName: string; // 회사명

  @Column({ length: 500 })
  serviceInfo: string; //서비스 설명

  @Column()
  serviceUrl: string; //서비스 url

  @Column()
  icon: string; //로고

  @Column()
  claimAddress: string; //리워드 수령 주소

  @Column()
  contactAddress: string; // 팀 연락처 (이름, 전화번호, 메일, 텔레그램)

  @Column({
    length: 10,
    unique: true,
    comment: '디앱 인증 번호, ex) poet-00001',
  })
  verificationCode: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  /*
   * Application Dapp Columns
   * */
  @Column({ comment: 'dapp 승인 후 연결' })
  dappId?: string;

  /*
   * Relations
   * */
}
