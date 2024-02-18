import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Actor } from "apps/nest-app/src/models/users.model";

@Module({
    imports: [SequelizeModule.forFeature([Actor])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }
