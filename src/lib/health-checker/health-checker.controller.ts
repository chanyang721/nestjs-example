import { Controller, Get }                                                                                     from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  MongooseHealthIndicator,
  TypeOrmHealthIndicator
} from "@nestjs/terminus";



@Controller("health-checker")
export class HealthCheckerController {
  constructor(
    private healthCheckerService: HealthCheckService,
    private typeOrmIndicator: TypeOrmHealthIndicator,
    private mongoIndicator: MongooseHealthIndicator
  ) {
  }


  /**
   *  {
   *     "status": 'error' | 'ok' | 'shutting_down',
   * }
   * */
  @Get()
  @HealthCheck()
  async healthCheck(): Promise<HealthCheckResult> {
    return this.healthCheckerService.check([
      () => this.typeOrmIndicator.pingCheck("database", { timeout: 1500 }),
      () => this.mongoIndicator.pingCheck("mongo", { timeout: 1500 })
    ]);
  }
}
