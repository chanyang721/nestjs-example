import { Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity }                   from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Reward }           from "./reward.entity";



@Entity({ name: 'reward_policy' })
export class RewardPolicy extends BaseEntity {
    
    
    @OneToOne(() => Reward)
    reward: Reward
}