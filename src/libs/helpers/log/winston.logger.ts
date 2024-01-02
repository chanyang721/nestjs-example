import { LoggerService }            from "@nestjs/common";
import { utilities, WinstonModule } from "nest-winston";
import winston                      from "winston";
import DailyRotateFile              from "winston-daily-rotate-file";

export enum LOG_LEVEL {
    INFO = 'info',
    DEBUG = 'debug',
    WARN = 'warn',
    ERROR = 'error'
}

const enum LOG_MAX_DAYS {
    INFO = '5d',
    DEBUG = '5d',
    WARN = '10d',
    ERROR = '30d'
}

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
              return `${ timestamp } || [${context}] ${ level }:: ${ message }${trace ? `\n    Error Stack: ${trace}` : ''}`;
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
                    // winston.format.colorize({ all: true }),
                    utilities.format.nestLike( process.env.APP_NAME, {
                        colors     : true,
                        prettyPrint: true
                    } ),
                    winston.format.printf( ( { timestamp, level, message, context, trace } ) => {
                        return `${ timestamp } || [${context}] ${ level }:: ${ message }${trace ? `\n    Error Stack: ${trace}` : ''}`;
                    } )
              )
        } ),
        new DailyRotateFile( dailyOptions( LOG_LEVEL.INFO, LOG_MAX_DAYS.INFO ) ),
        new DailyRotateFile( dailyOptions( LOG_LEVEL.WARN, LOG_MAX_DAYS.WARN ) ),
        new DailyRotateFile( dailyOptions( LOG_LEVEL.ERROR, LOG_MAX_DAYS.ERROR ) )
    ]
} );