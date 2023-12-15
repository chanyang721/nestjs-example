import { Injectable }             from "@nestjs/common";
import { InjectRepository }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Transaction }            from "./entities/transaction.entity";



@Injectable()
export class TransactionsRepository extends Repository<Transaction> {
    constructor(
      private readonly dataSource: DataSource,
      @InjectRepository( Transaction )
      private readonly transactionsRepository: Repository<Transaction>
    ) {
        super( Transaction, dataSource.createEntityManager() );
    }
}