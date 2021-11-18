//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Injectable }           from '@nestjs/common'
import { CanActivate }          from '@nestjs/common'
import { ExecutionContext }     from '@nestjs/common'
import { Reflector }            from '@nestjs/core'
import { Role }                 from '../models/role.enum'


//---------------------------------------------------------------------
// Guard Definition Section
//---------------------------------------------------------------------
@Injectable()
export class RolesGuard implements CanActivate
{
    //---------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------
    private _reflector: Reflector


    //---------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------
    constructor(pReflector: Reflector)
    {
        this._reflector = pReflector
    }

    //---------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------
    canActivate(context: ExecutionContext): boolean
    {
        const requiredRoles = this._reflector.getAllAndOverride<Role[]>(
            'roles', [
                context.getHandler(),
                context.getClass()
            ]
        )

        if (!requiredRoles)
        {
            return true;
        }

        const { user } = context.switchToHttp().getRequest()

        const hasRole = () => requiredRoles.some((role) => user.roles?.includes(role))

        return user && user.roles && hasRole()
    }
}
