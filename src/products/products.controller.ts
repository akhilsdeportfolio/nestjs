import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Prodcut } from "./product.model";

@Controller("products")
export class ProductsController {
 constructor(private readonly productsService: ProductsService) {}

 @Post()
 addProduct(@Body("title") prodTitle: string, @Body("description") descr: string, @Body("price") prodPrice: number): Prodcut {
  return this.productsService.insertProduct(prodTitle, descr, prodPrice);
 }

 @Get()
 getProducts(): Prodcut[] {
  return this.productsService.getAllProducts();
 }

 @Get(":id")
 getProduct(@Param("id") prodId: string): Prodcut {
  return this.productsService.getProduct(prodId);
 }

 @Patch(":id")
 updateProduct(@Param("id") prodId: string, @Body("data") data: Prodcut): Prodcut {
  return this.productsService.update(prodId, data);
 }
}
