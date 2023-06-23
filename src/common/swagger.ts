import { NestExpressApplication }         from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule }                      from "@nestjs/swagger";
import { COOKIE_ACCESS_TOKEN_NAME, COOKIE_REFRESH_TOKEN_NAME } from "../constants";



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
    .addCookieAuth(COOKIE_ACCESS_TOKEN_NAME, {
      type       : "apiKey",
      in         : "cookie",
      name       : COOKIE_ACCESS_TOKEN_NAME,
      description: `Enter ${COOKIE_ACCESS_TOKEN_NAME}`
    })
    .addCookieAuth(COOKIE_REFRESH_TOKEN_NAME, {
      type       : "apiKey",
      in         : "cookie",
      name       : COOKIE_REFRESH_TOKEN_NAME,
      description: `Enter ${COOKIE_REFRESH_TOKEN_NAME}`
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);
};