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
   username: "root",
   password: "Akhil123#",
   database: "todos",
   host: "mysql", // Use the service name as the host
   port: 3306, // MySQL default port
   dialect: "mysql",
   models: [Actor],
   synchronize: true,
   autoLoadModels: true,
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
export class AppModule {
 constructor() {
  const options = SequelizeModule.forRoot({
   username: "root",
   password: "Akhil123#",
   database: "todos",
   host: "mysql", // Use the service name as the host
   port: 3306, // MySQL default port
   dialect: "mysql",
   models: [Actor],
   synchronize: true,
  });

  console.log("Database connection URL:", `mysql://${options.username}:${options.password}@${options.host}:${options.port}/${options.database}`);
 }
}
