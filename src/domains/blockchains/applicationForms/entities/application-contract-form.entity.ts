import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Contract } from "../../contracts/entities/contract.entity";
import { ApplicationForm } from './application-form.entity';

@Entity({ name: 'application_contract_form' })
export class ApplicationContractForm {
  @PrimaryGeneratedColumn()
  id: number;

  /*
   * Contract Columns
   * */
  @Column()
  name: string;

  @Column({
    unique: true,
    length: 500,
  })
  address: string;

  @Column({ nullable: true })
  info: string;

  @Column({ length: 500 })
  githubLink: string;

  @Column('json', { nullable: true })
  functionSig: any;

  @Column({ length: 500 })
  deployTxHash: string;

  @Column({ default: false })
  enabled: boolean;

  @Column()
  auditUrl: string;

  @Column()
  label: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  /*
   * Contract Entity FK Columns
   * */
  @Column({
    nullable: true,
    comment: '승인 후 연결할 dapp id',
  })
  dappId?: number;

  /*
   * Application FK Columns
   * */
  // @Column({ comment: '연결된 dapp 신청서 id' })
  // applicationDappFormId: number;

  @Column({ comment: '신청서 id' })
  applicationFormId: number;

  @Column({ nullable: true, comment: '승인 후 생성된 contract와 연결' })
  contractId?: number;

  /*
   * Application Relations
   * */
  @ManyToOne(() => ApplicationForm)
  @JoinColumn({ name: 'applicationFormId' })
  applicationForm: ApplicationForm;

  // @ManyToOne(() => ApplicationDappForm)
  // @JoinColumn({ name: 'applicationDappFormId' })
  // applicationDappForm: ApplicationDappForm;

  @ManyToOne(() => Contract, {
    nullable: true,
  })
  @JoinColumn({ name: 'contractId' })
  contract?: Contract;
}
