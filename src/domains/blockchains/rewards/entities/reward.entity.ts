import { Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity }                   from "../../../../libs/database/orm/typeorm/base/base.entity";
import { RewardPolicy }                 from "./reward-policy.entity";



@Entity( { name: "reward" } )
export class Reward extends BaseEntity {
    
    
    @OneToOne( () => RewardPolicy )
    @JoinColumn( { name: "policy" } )
    reward_policy: RewardPolicy;
}