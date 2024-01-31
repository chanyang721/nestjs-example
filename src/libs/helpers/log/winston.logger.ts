import { LoggerService } from "@nestjs/common";
import { utilities, WinstonModule } from "nest-winston";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import SlackHook from "winston-slack-webhook-transport";
import { LOG_LEVEL, LOG_MAX_DAYS } from "./enums/log.enum";



const dailyOptions = ( level: string, maxFiles: string ) => {
    return {
        level,
        datePattern  : "YYYY-MM-DD",
        dirname      : process.env.LOG_DIR + `/${ level }`,
        filename     : `%DATE%.${ level }.log`,
        maxSize      : "20mb",
        maxFiles     : maxFiles,
        zippedArchive: true,
        format       : winston.format.combine(
          winston.format.timestamp( { format: "YYYY-MM-DD hh:mm:ss.SSS A" } ),
          winston.format.json(),
          winston.format.printf( ( { timestamp, level, message, context, trace } ) => {
              return `[${ process.env.APP_NAME }] :: ${ level } :: ${ timestamp } [${ context }] ${ message }${ trace ? `\n    Error Stack: ${ trace }` : "" }`;
          } )
        )
    };
};

export const winstonLogger: LoggerService = WinstonModule.createLogger( {
    transports: [
        new winston.transports.Console( {
            debugStdout     : true,
            handleExceptions: true,
            level           : process.env.NODE_ENV === "production" ? "http" : "silly",
            format          : process.env.NODE_ENV === "production"
              ? winston.format.simple()
              : winston.format.combine(
                winston.format.timestamp( { format: "YYYY-MM-DD hh:mm:ss.SSS A" } ),
                winston.format.colorize( { level: true, message: true } ),
                winston.format.errors( { stack: true } ),
                utilities.format.nestLike( process.env.APP_NAME, {
                    colors     : true,
                    prettyPrint: true
                } )
                // winston.format.printf( ( { timestamp, level, message, context, trace } ) => {
                //     return `${ timestamp } || [${ context }] ${ level }:: ${ message }${ trace ? `\n    Error Stack: ${ trace }` : "" }`;
                // } ),
              )
        } ),
        
        new DailyRotateFile( dailyOptions( LOG_LEVEL.INFO, LOG_MAX_DAYS.INFO ) ),
        new DailyRotateFile( dailyOptions( LOG_LEVEL.WARN, LOG_MAX_DAYS.WARN ) ),
        new DailyRotateFile( dailyOptions( LOG_LEVEL.ERROR, LOG_MAX_DAYS.ERROR ) ),
        
        new SlackHook( {
            webhookUrl: process.env.SLACK_WEBHOOK_URL,
            channel   : "#logs",
            username  : "LoggerBot",
            level     : LOG_LEVEL.ERROR,
            format    : winston.format.combine(
              winston.format.timestamp(),
              winston.format.printf( ( { timestamp, level, message, context, trace } ) => {
                  return `${ timestamp } || [${ context }] ${ level }:: ${ message }${ trace ? `\n    Error Stack: ${ trace }` : "" }`;
              } )
            )
        } )
        
        //     new winstonMongoDB.MongoDB( {
        //         level     : LOG_LEVEL.INFO,
        //         db        : 'mongodb://mongo_db:27017',
        //         dbName: 'boxer',
        //         collection: "logs",
        //         format    : winston.format.combine(
        //           winston.format.timestamp(),
        //           winston.format.json()
        //         )
        //     } )
    ]
} );