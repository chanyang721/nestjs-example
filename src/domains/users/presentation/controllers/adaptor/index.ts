import { UpdateUserDto } from '../../dtos/update.user.dto';



export interface IUserControllerAdapter {
  updateUser( files: Express.MulterS3.File[], updateUserDto: UpdateUserDto ): Promise<void>;
}

