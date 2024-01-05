import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'admin' })
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  memo: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
