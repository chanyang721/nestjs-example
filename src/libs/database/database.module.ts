import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mainMongooseModuleAsyncOptions } from './orm/mongoose/options/mongoose.module.options';
import {
    boardTypeOrmModuleAsyncOptions,
    dAppTypeOrmModuleAsyncOptions,
    typeOrmModuleAsyncOptions,
} from './orm/typeorm/options/typeorm.module.options';



@Module( {
  imports  : [
    TypeOrmModule.forRootAsync( typeOrmModuleAsyncOptions ),
    TypeOrmModule.forRootAsync( dAppTypeOrmModuleAsyncOptions ),
    TypeOrmModule.forRootAsync( boardTypeOrmModuleAsyncOptions ),
    
    MongooseModule.forRootAsync( mainMongooseModuleAsyncOptions ),
  ],
  providers: [],
} )
export class DatabaseModule {
}
