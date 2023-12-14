import { Body, Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { AnyFilesInterceptor }                                    from "@nestjs/platform-express";
import { ApiBearerAuth, ApiTags }                                 from "@nestjs/swagger";
import { multerOptions }                                          from "../../../../libs/helpers/multer/options";
import { Public }                                                 from "../../../../libs/utils/decoretors";
import { UserService }                                            from "../../application/services/user.service";
import { UpdateUserDto }                                          from "../dtos/update.user.dto";
import { IUserControllerAdapter }                                 from "../interfaces/user.controller.interface";



@Public()
@ApiBearerAuth()
@ApiTags( "user" )
@Controller( "users" )
export class UserController
  implements IUserControllerAdapter {
    constructor(
      private readonly userService: UserService
    ) {
    }
    
    
    @Post( "" )
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    public async updateUser(
      @UploadedFiles() files: Express.MulterS3.File[],
      @Body() updateUserDto: UpdateUserDto
    ): Promise<any> {
        return await this.userService.updateUser( { thumbnail: files[ 0 ], ...updateUserDto } );
    }
}
