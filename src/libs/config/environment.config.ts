import { ConfigModuleOptions } from "@nestjs/config/dist/interfaces";
import Joi from "joi";



export const configOptions: ConfigModuleOptions = {
    isGlobal         : true,
    envFilePath      : ".env",
    // validationOptions: {
    //     allowUnknown: true,
    //     abortEarly  : true
    // },
    // validationSchema: {
    //     SERVER_PORT      : Joi.number()
    //                           .required(),
    //     DB_CONTAINER_HOST: Joi.string()
    //                           .required(),
    //     DB_HOST          : Joi.alternatives()
    //                           .conditional( "DB_CONTAINER_HOST", {
    //                               is       : undefined,
    //                               then     : "localhost",
    //                               otherwise: "mysql_db"
    //                           } )
    // }
};