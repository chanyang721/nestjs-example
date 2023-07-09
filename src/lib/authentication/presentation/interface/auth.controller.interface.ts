import { FirebaseUserDto } from "../dto/auth.register.user.dto";



export interface IAuthController<T> {
  registerUserThroughFirebase( firebaseUserDto: FirebaseUserDto ): Promise<any>;
  // registerUserThroughCognito( cognitoUserDto ): Promise<any>
}
