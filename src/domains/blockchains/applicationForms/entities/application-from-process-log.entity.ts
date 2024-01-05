import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Admin } from './admin.entity';
import { ApplicationForm } from './application-form.entity';
import { APPLICATION_PROCESS_STATUS } from "./enums";

@Entity({ name: 'application_form_process_log' })
export class ApplicationFromProcessLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: APPLICATION_PROCESS_STATUS,
    comment: '신청서 진행 상태',
  })
  beforeProcessStatus: APPLICATION_PROCESS_STATUS;

  @Column({
    type: 'enum',
    enum: APPLICATION_PROCESS_STATUS,
    comment: '신청서 진행 상태',
  })
  afterProcessStatus: APPLICATION_PROCESS_STATUS;

  @Column({ comment: '신청서 상태를 변경한 관리자 id' })
  handlerAdminId: string;

  @Column({ comment: '신청서 id' })
  applicationFormId: string;

  @CreateDateColumn({ type: 'timestamp' })
  changedDate: Date;

  @ManyToOne(() => Admin)
  @JoinColumn({ name: 'handlerAdminId' })
  admin: Admin;

  @ManyToOne(() => ApplicationForm)
  @JoinColumn({ name: 'applicationFormId' })
  applicationForm: ApplicationForm;
}
