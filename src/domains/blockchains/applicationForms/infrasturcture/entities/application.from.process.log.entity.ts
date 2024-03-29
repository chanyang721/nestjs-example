import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApplicationForm } from './application.form.entity';
import { APPLICATION_PROCESS_STATUS } from './enums';



@Entity( { name: 'application_form_process_log' } )
export class ApplicationFormProcessLog {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string;
  
  @Column( {
    type   : 'enum',
    enum   : APPLICATION_PROCESS_STATUS,
    comment: '신청서 진행 상태',
  } )
  before_process_status: APPLICATION_PROCESS_STATUS;
  
  @Column( {
    type   : 'enum',
    enum   : APPLICATION_PROCESS_STATUS,
    comment: '신청서 진행 상태',
  } )
  after_process_status: APPLICATION_PROCESS_STATUS;
  
  @Column({ length: 255, nullable: true, comment: '상태 변경 사유' })
  reason: string
  
  @Column( { comment: '관리자 id 서비스 분리로 인한 fk키 연결 생략' } )
  admin_user_id: string;
  
  @Column( { comment: '신청서 id' } )
  application_form_id: string;
  
  @CreateDateColumn( { type: 'timestamp' } )
  changed_at: Date;
  
  @ManyToOne( () => ApplicationForm, application_form => application_form.process_logs )
  @JoinColumn( { name: 'application_form_id' } )
  application_form: ApplicationForm;
}