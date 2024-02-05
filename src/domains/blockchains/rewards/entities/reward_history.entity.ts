import { Entity } from 'typeorm';
import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';



@Entity( { name: 'reward_history' } )
export class RewardHistory extends BaseEntity {

}