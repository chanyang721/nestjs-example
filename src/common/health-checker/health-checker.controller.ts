import { Controller, Get }                                                            from "@nestjs/common";
import { HealthCheck, HealthCheckResult, HealthCheckService, TypeOrmHealthIndicator } from "@nestjs/terminus";



@Controller("health-checker")
export class HealthCheckerController {
  constructor( private healthCheckerService: HealthCheckService, private typeOrmIndicator: TypeOrmHealthIndicator ) {
  }


  /**
   *  {
   *     "status": 'error' | 'ok' | 'shutting_down',
   * }
   * */
  @Get() @HealthCheck()
  async healthCheck(): Promise<HealthCheckResult> {
    return this.healthCheckerService.check([
      () => this.typeOrmIndicator.pingCheck("database", { timeout: 1500 })
    ]);
  }
}
