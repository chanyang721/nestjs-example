import { Module }              from '@nestjs/common';
import { ConfigModule }        from "@nestjs/config";
import { HealthCheckerModule } from "./common/health-checker/health-checker.module";
import { CatsModule }          from './domain/cats/cats.module';
import { configOptions }       from "./fundamentals/options/config.options";
import { TypeOrmModule }       from "@nestjs/typeorm";
import { typeOrmOptions }      from "./fundamentals/options/database.options";



@Module({
  imports: [
    /**
     * Core Modules
     * */
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRootAsync(typeOrmOptions),
    HealthCheckerModule,

    /**
     * Domain Modules
     * */

    /**
     * Test Modules
     * */
    CatsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
