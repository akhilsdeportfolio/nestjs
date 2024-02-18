import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

declare const module: any;

async function bootstrap() {
 const app = await NestFactory.create(AppModule);

 const config = new DocumentBuilder().setTitle("API DOCS").setDescription("The  API description").setVersion("1.0").addTag("API").build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup("api", app, document);
 app.useGlobalPipes(new ValidationPipe());

 if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => app.close());
 }
 await app.listen(3000);
}
bootstrap();
