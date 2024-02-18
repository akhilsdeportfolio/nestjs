import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { OrdersModule } from "./orders/orders.module";
import { HealthModule } from "./health/health.module";
import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { SequelizeModule } from "@nestjs/sequelize";
import { Actor } from "./models/users.model";

@Module({
 imports: [
  SequelizeModule.forRoot({
   dialect: "mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "Akhil123#",
   database: "sakila",
   models: [Actor],
   synchronize: true,
  }),
  ProductsModule,
  OrdersModule,
  HealthModule,
  CacheModule.register({ ttl: 10, isGlobal: true }),
 ],
 controllers: [AppController],
 providers: [
  AppService,
  {
   provide: APP_INTERCEPTOR,
   useClass: CacheInterceptor,
  },
 ],
})
export class AppModule {}
