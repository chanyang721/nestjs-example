import { ConfigService }          from "@nestjs/config";
import { NestFactory }            from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import compression                from "compression";
import cookieParser               from "cookie-parser";
import helmet                     from "helmet";
import { AppModule }              from "./app.module";
import { fundamentals }           from "./libs/fundamentals";
import { setupSwagger }           from "./libs/utils/swagger";



async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>( AppModule );
    
    app.enableCors( {
        origin     : true, // TODO 도메인 수정
        methods    : [ "GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS" ],
        maxAge     : 3600 * 5,
        credentials: true
    } );
    
    app.use( helmet() );
    
    app.use( cookieParser() );
    
    app.use( compression() );
    
    await fundamentals( app );
    
    await setupSwagger( app );
    
    await app.listen( app.get( ConfigService )
                         .get( "SERVER_PORT" ) );
    
    console.info( `Server is running on: ${ await app.getUrl() }` );
    
    return app;
}

void bootstrap();
