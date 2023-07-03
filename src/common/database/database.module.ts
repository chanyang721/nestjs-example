import { Module }                    from "@nestjs/common";
import { TypeOrmModule }             from "@nestjs/typeorm";
import { typeOrmModuleAsyncOptions } from "../../fundamentals/options/typeorm.module.options";


@Module({
  imports: [
    /**
     * TODO: CQRS, Kubernetes Node 별 Database and Replica 다양한 연결의 위한 모듈 분리
     */
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
  ],
  exports: [],
  providers: [],
})
export class DatabaseModule {}