import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
}                              from 'typeorm';
import { Applicant }           from "./applicant.entity";
import { ApplicationDappForm } from './application-dapp-form.entity';
import { APPLICATION_PROCESS_STATUS } from "./enums";

@Entity({ name: 'application_form' })
export class ApplicationForm {
  @PrimaryGeneratedColumn()
  id: number;

  /*
   * Columns
   * */
  @Column({
    type: 'enum',
    enum: APPLICATION_PROCESS_STATUS,
    default: APPLICATION_PROCESS_STATUS.APPLY,
    comment: '신청서 진행 상태',
  })
  processStatus: APPLICATION_PROCESS_STATUS;

  @Column({ comment: '약관 동의 여부' })
  termsAgreement: boolean;

  // TODO: 반환 함수 생성
  @Column({
    unique: true,
    comment: '앞자리를 0으로 채운 신청서 번호로 5자리로 반환함, ex) 00001',
  })
  applicationFormsNumber: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  /*
   * FK Columns
   * */
  @Column()
  applicationDappFormId: number;

  @Column()
  applicantId: number;

  /*
   * Relations
   * */
  @ManyToOne(() => Applicant)
  @JoinColumn({ name: 'applicantId' })
  applicant: Applicant;

  @ManyToOne(() => ApplicationDappForm)
  @JoinColumn({ name: 'applicationDappFormId' })
  applicationDappForm: ApplicationDappForm;
}
