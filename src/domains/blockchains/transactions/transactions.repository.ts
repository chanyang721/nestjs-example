import { Injectable }             from "@nestjs/common";
import { InjectRepository }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Transaction }            from "./entities/transaction.entity";


@Injectable()
export class TransactionsRepository extends Repository<Transaction> {
    constructor(
      @InjectRepository(Transaction)
      private readonly transactionsRepository: Repository<Transaction>,
      private readonly dataSource: DataSource
    ) {
        super(Transaction, dataSource.createEntityManager());
    }
}