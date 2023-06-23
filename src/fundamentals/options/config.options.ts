import { ConfigModuleOptions } from "@nestjs/config";
import * as Joi                from "joi";



export const configOptions: ConfigModuleOptions = {
  isGlobal         : true,
  envFilePath      : `.env`,
  validationSchema : Joi.object({
    // Server
    PORT: Joi.number()
             .default(4000)
             .required(),

    // DB
    DB_HOST    : Joi.string()
                    .required(),
    DB_PORT    : Joi.number()
                    .required(),
    DB_USERNAME: Joi.string()
                    .required(),
    DB_PASSWORD: Joi.string()
                    .required(),
    DB_DATABASE: Joi.string()
                    .required(),

    // JWT
    SALT                             : Joi.number()
                                          .default(10)
                                          .required(),
    JWT_ALGORITHM                    : Joi.string()
                                          .required(),
    JWT_SECRET                       : Joi.string()
                                          .required(),
    JWT_ACCESS_TOKEN                 : Joi.string()
                                          .required(),
    JWT_ACCESS_TOKEN_EXPIRATION_TIME : Joi.string()
                                          .required(),
    JWT_REFRESH_TOKEN                : Joi.string()
                                          .required(),
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string()
                                          .required(),

    // AWS S3
    AWS_S3_BUCKET_REGION    : Joi.string()
                                 .required(),
    AWS_S3_BUCKET_NAME      : Joi.string()
                                 .required(),
    S3_ENDPOINT             : Joi.string()
                                 .required(),

    // AWS Config
    AWS_REGION           : Joi.string()
                              .required(),
    AWS_ACCESS_KEY_ID    : Joi.string()
                              .required(),
    AWS_SECRET_ACCESS_KEY: Joi.string()
                              .required()
  }),
  validationOptions: {
    allowUnknown: true,
    abortEarly  : true
  }
};