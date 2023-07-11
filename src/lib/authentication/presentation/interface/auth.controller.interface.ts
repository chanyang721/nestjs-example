import { RegisterUserDto } from "../dto/auth.register.user.dto";



export interface IAuthController<T> {
  registerUserThroughAuthenticationServer( registerUserDto: RegisterUserDto ): Promise<any>;

  // registerUserThroughCognito( cognitoUserDto ): Promise<any>
}
