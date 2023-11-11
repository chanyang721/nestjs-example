import { Module }        from "@nestjs/common";
import { PostsModule }   from "./posts/posts.module";
import { ProjectModule } from "./projects/project.module";



@Module( {
    imports    : [
        PostsModule,
        ProjectModule
    ],
    controllers: [],
    providers  : []
} )
export class BoardsModule {
}