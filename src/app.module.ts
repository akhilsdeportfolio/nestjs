import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { OrdersModule } from "./orders/orders.module";
import { HealthModule } from "./health/health.module";
import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  imports: [ProductsModule, OrdersModule, HealthModule, CacheModule.register({ ttl: 10, isGlobal: true })],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {
  constructor() {
    console.log("App Module");
  }
}
