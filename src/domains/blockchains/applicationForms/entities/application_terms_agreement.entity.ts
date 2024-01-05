import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TermsAgreementName {
  Disclaimer = '면책 고지',
  CollectionOfPersonal = '개인정보 수집 동의',
}

@Entity({ name: 'APPLICATION_TERMS_AGREEMENT' })
export class ApplicationTermsAgreement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TermsAgreementName,
    comment: '약관 이름',
  })
  name: TermsAgreementName;

  @Column({ length: 1000, comment: '약관 내용' })
  contents: string;

  @Column({ comment: '약관 필수 여부' })
  required: boolean;

  @Column({ comment: '약관 필수 체크박스 옆 내용' })
  requiredContents: string;

  @Column({ comment: '약관 활성화 상태' })
  isActive: boolean;

  @Column({ comment: '약관 버전' })
  version: string;

  /*
   * Timestamp
   * */
  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
