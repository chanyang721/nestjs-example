import { NestExpressApplication }         from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";



export const setupSwagger = async( app: NestExpressApplication ) => {

  const config = new DocumentBuilder()
    .setTitle("Be Free API")
    .setDescription("Be Free API description")
    .setVersion("1.0")
    .addTag("cats")
    .addBearerAuth({
      type        : "http",
      scheme      : "bearer",
      in          : "header",
      bearerFormat: "JWT",
      description : "Enter JWT Token"
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);
};