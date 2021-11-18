//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }               from '@nestjs/common'
import { UnauthorizedException }    from '@nestjs/common'
import { UsersService }             from '../../../users/services/users.service'
import { Strategy }                 from 'passport-local'
import { PassportStrategy }         from '@nestjs/passport'


//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy)
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private _usersService: UsersService

    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(pUsersService: UsersService)
    {
        super({ usernameField: 'email' })
        this._usersService = pUsersService
    }

    //---------------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------------
    async validate(username: string, pass: string): Promise<any>
    {
        const user = await this._usersService.findUserByEmail(username)

        if (user && user.password === pass)
        {
            return user
        }
        else
        {
            throw new UnauthorizedException()
        }
    }
}
