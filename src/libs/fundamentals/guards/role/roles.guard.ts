import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { USER_ROLE } from '../../../../domains/users/infrastructure/entities/enums';
import { ROLES_KEY } from '../../../utils/decoretors';



@Injectable()
export class RolesGuard implements CanActivate {
  constructor( private reflector: Reflector ) {
  }
  
  
  canActivate( context: ExecutionContext ): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<USER_ROLE[]>( ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ] );
    
    if ( !requiredRoles ) {
      return true;
    }
    
    const { user } = context.switchToHttp()
                            .getRequest();
    
    const isSameRole = requiredRoles.some( ( role ) => user.role?.includes( role ) );
    if ( !isSameRole ) {
      throw new BadRequestException( '권한이 없습니다' );
    }
    
    return isSameRole;
  }
}