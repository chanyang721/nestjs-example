import { Module }                    from "@nestjs/common";
import { TypeOrmModule }             from "@nestjs/typeorm";
import { typeOrmModuleAsyncOptions } from "../../fundamentals/options/typeorm.module.options";


@Module({
  imports: [
    /**
     * TODO: CQRS, Kubernetes Node 별 Database and Replica 다양한 연결의 위한 모듈 분리
     */
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),

    /**
     * TODO: CQRS 적용 Redis, MongoDB Database 분리
     */

  ],
  exports: [],
  providers: [],
})
export class DatabaseModule {}