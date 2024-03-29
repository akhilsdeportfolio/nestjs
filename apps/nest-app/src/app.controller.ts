import { Controller, Get, Header } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
 constructor(private readonly appService: AppService) {
  console.log("AppController constructor");
 }

 @Get()
 @Header("Content-Type", "text/html")
 getHello(): { message: string } {
  return this.appService.getHello();
 }
}
