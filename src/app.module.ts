import { Module }              from '@nestjs/common';
import { HealthCheckerModule } from "./common/health-checker/health-checker.module";



@Module({
  imports: [
    HealthCheckerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
