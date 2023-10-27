import { SetMetadata } from '@nestjs/common';
import { UserRole }    from "../../../domain/users/infrastructure/entities/enums/user.enum.role";




export const ROLES_KEY = 'roles';
export const Roles = ( ...roles: UserRole[] ) => SetMetadata( ROLES_KEY, roles );