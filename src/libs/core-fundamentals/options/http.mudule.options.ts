import { HttpModuleAsyncOptions } from '@nestjs/axios/dist/interfaces'
import { ConfigService }          from '@nestjs/config'



export const httpModuleAsyncOptions: HttpModuleAsyncOptions = {
    inject    : [ ConfigService ],
    useFactory: async( configService: ConfigService ) => ( {
        headers     : {
            'Content-Type': 'application/json',
        },
        timeout     : 5000,
        maxRedirects: 5,
    } ),
}