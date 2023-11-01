import { Controller, Get }                                                                                                            from "@nestjs/common";
import { HealthCheck, HealthCheckResult, HealthCheckService, MemoryHealthIndicator, MongooseHealthIndicator, TypeOrmHealthIndicator } from "@nestjs/terminus";



@Controller( "health-checker" )
export class HealthCheckerController {
    constructor(
      private healthCheckerService: HealthCheckService,
      private typeOrmIndicator: TypeOrmHealthIndicator,
      private mongoIndicator: MongooseHealthIndicator,
      private memoryHealthIndicator: MemoryHealthIndicator
    ) {
    }
    
    
    /**
     *  {
     *     "codes": 'error' | 'ok' | 'shutting_down',
     * }
     * */
    @Get()
    @HealthCheck()
    async healthCheck(): Promise<HealthCheckResult> {
        return this.healthCheckerService.check( [
            () => this.typeOrmIndicator.pingCheck( "database", { timeout: 1500 } ),
            () => this.mongoIndicator.pingCheck( "mongo", { timeout: 1500 } ),
            () => this.memoryHealthIndicator.checkHeap( "memory_heap", 150 * 1024 * 1024 )
        ] );
    }
}
