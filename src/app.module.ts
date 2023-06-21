import { Module }              from '@nestjs/common';
import { HealthCheckerModule } from "./common/health-checker/health-checker.module";
import { CatsModule } from './cats/cats.module';



@Module({
  imports: [
    /**
     * Core Modules
     * */
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
