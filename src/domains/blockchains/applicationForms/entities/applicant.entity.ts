import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'applicant' })
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, comment: '신청자 이름' })
  name: string;

  @Column({ length: 11, comment: '신청자 핸드폰 번호' })
  phoneNumber: string;

  @Column({ comment: '신청자 이메일' })
  email: string;

  @Column({ nullable: true, comment: '신청자 파피루스 닉네임' })
  papyrusNickname: string;

  @Column({ nullable: true, comment: '텔레그램 유저 이름' })
  telegramUsername: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
