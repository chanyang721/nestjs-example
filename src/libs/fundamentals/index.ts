import { RequestMethod }          from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { globalExceptionFilters } from "./filters";
import { globalGuards }           from "./guards";
import { globalInterceptors }     from "./interceptors";
import { globalPipes }            from "./pipes";



export const fundamentals = async ( app: NestExpressApplication ) => {
    /**
     * Global Core Fundamentals
     * */
    // app.use() // 글로벌 미들웨어 설정
    
    app.useGlobalGuards( ...globalGuards );
    
    app.useGlobalInterceptors( ...globalInterceptors );
    
    app.useGlobalPipes( ...globalPipes );
    
    app.useGlobalFilters( ...globalExceptionFilters );
    
    
    /**
     * Global Settings
     * */
    app.setGlobalPrefix( "api", {
        exclude: [
            {
                path  : "/health-checker",
                method: RequestMethod.GET
            }
        ]
    } );
    
};
