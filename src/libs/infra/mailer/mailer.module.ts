import { MailerModule as OriginalMailerModule, MailerService } from "@nestjs-modules/mailer";
import { HandlebarsAdapter }                                   from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { Module }                                              from "@nestjs/common";
import path                                                    from "path";



@Module( {
    imports  : [
        OriginalMailerModule.forRootAsync( {
            inject    : [],
            useFactory: async () => {
                return {
                    defaults: {
                        from: "\"No Reply\" <noreply@example.com>"
                    },
                    template: {
                        dir    : path.join( process.env.PWD, "templates/pages" ),
                        adapter: new HandlebarsAdapter(),
                        options: {
                            strict: true
                        }
                    },
                    preview : true,
                    options : {
                        partials: {
                            dir    : path.join( process.env.PWD, "templates/partials" ),
                            options: {
                                strict: true
                            }
                        }
                    }
                };
            }
        } )
    ],
    providers: [
        MailerService
    ]
} )
export class MailerModule {
}