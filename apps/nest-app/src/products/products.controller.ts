import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Prodcut } from "./product.model";
import { Actor } from "apps/nest-app/src/models/users.model";

@Controller("products")
export class ProductsController {
 constructor(private readonly productsService: ProductsService) {}

 @Post()
 async addProduct(@Body("last_name") prodTitle: string, @Body("first_name") descr: string, @Body("actor_id") prodPrice: number): Promise<Actor> {
  return await this.productsService.insertProduct(prodTitle, descr, prodPrice);
 }

 @Get()
 async getProducts(): Promise<Actor[]> {
  return await this.productsService.getAllProducts();
 }

 @Get(":id")
 getProduct(@Param("id") prodId: string): Promise<Actor> {
  return this.productsService.getProduct(prodId);
 }

 @Patch(":id")
 updateProduct(@Param("id") prodId: string, @Body("data") data: Prodcut): Promise<Actor> {
  return this.productsService.update(prodId, data);
 }
}
