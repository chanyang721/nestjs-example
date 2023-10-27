import { Body, Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags }                                 from '@nestjs/swagger';
import { AnyFilesInterceptor }                                    from '@nestjs/platform-express';
import { UpdateUserDto }                                          from '../dtos/update.user.dto';
import { IUserController }                                        from '../interfaces/user.controller.interface';
import { UserService }   from '../../application/services/user.service';
import { multerOptions } from '../../../../libs/helpers/multer/options';
import { Public }        from '../../../../libs/utils/decoretors';



@Public()
@ApiBearerAuth()
@ApiTags( 'user' )
@Controller( 'users' )
export class UserController implements IUserController {
    constructor(
        private readonly userService: UserService,
    ) {
    }
    
    
    @Post( '' )
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    public async updateUser(
        @UploadedFiles() files: Express.MulterS3.File[],
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<any> {
        return await this.userService.updateUser( { thumbnail: files[ 0 ], ...updateUserDto } );
    }
}
