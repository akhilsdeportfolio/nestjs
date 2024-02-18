import { Controller, Get } from "@nestjs/common";
import { HealthCheckService, HttpHealthIndicator, HealthCheck, MemoryHealthIndicator } from "@nestjs/terminus";

@Controller("health")
export class HealthController {
 constructor(
  private health: HealthCheckService,
  private http: HttpHealthIndicator,
  private memory: MemoryHealthIndicator,
 ) {}

 @Get()
 @HealthCheck()
 check() {
  return this.health.check([
   () => this.memory.checkRSS("products", 160 * 1024 * 1024),
   () => this.http.pingCheck("products", "http://localhost:3000/products"),
   () => this.memory.checkHeap("memory", 1400 * 1024 * 1024),
  ]);
 }
}
