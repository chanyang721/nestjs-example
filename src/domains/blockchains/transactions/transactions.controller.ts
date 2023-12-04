import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTransactionDto }                              from "./dto/create-transaction.dto";
import { UpdateTransactionDto }                              from "./dto/update-transaction.dto";
import { TransactionsService }                               from "./transactions.service";



@Controller( "transactions" )
export class TransactionsController {
    constructor( private readonly transactionsService: TransactionsService ) {
    }
}
