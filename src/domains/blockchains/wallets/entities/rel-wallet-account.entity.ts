import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';
import { Account } from './account.entity';
import { Wallet } from './wallet.entity';



@Entity( { name: 'rel_wallet_account' } )
export class RelWalletAccount extends BaseEntity {
  /*
   * Columns
   * */
  
  
  /*
   * FK Columns
   * */
  @Column( { type: 'uuid', length: 36 } )
  wallet_id: string;
  
  @Column( { type: 'uuid', length: 36 } )
  account_id: string;
  
  /*
   * Relations
   * */
  @ManyToOne( () => Wallet, wallet => wallet.rel_wallet_accounts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  } )
  @JoinColumn( { name: 'wallet_id' } )
  wallet: Wallet;
  
  @ManyToOne( () => Account, account => account.rel_wallet_accounts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  } )
  @JoinColumn( { name: 'account_id' } )
  account: Account;
}