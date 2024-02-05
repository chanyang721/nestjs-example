import { Module } from '@nestjs/common';
import { RewardsService } from './rewards.service';



@Module( {
  imports  : [],
  providers: [ RewardsService ],
} )
export class RewardsModule {
}
