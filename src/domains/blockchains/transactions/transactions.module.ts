import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionsController } from './transactions.controller';
import { TransactionsRepository } from './transactions.repository';
import { TransactionsService } from './transactions.service';



@Module( {
  imports    : [
    TypeOrmModule.forFeature( [ Transaction ] ),
  ],
  controllers: [ TransactionsController ],
  providers  : [ TransactionsService, TransactionsRepository ],
} )
export class TransactionsModule {
}
