import { PickType }    from "@nestjs/mapped-types";
import { PostsEntity } from "../../infrastructrue/entities/posts.entity";



export class UpdatePostDto extends PickType( PostsEntity, [ "id", "title", "content" ] ) {
}