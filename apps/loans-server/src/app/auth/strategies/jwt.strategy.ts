//-------------------------------------------------------------------------------
// Exlint Configuration Section
//-------------------------------------------------------------------------------
/* eslint-disable @typescript-eslint/no-explicit-any */
//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { ExtractJwt }                   from 'passport-jwt'
import { Strategy }                     from 'passport-jwt'
import { PassportStrategy }             from '@nestjs/passport'
import { Injectable }                   from '@nestjs/common'
import { secrets }                      from '../secrets/secrets'
import { UsersService }                 from '../../../users/services/users.service'

//-------------------------------------------------------------------------------
// JWT Strategy Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
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
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secrets.jwt.jwtSecret,
        })
        this._usersService = pUsersService
    }

    //---------------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------------
    async validate(payload: any)
    {
        const user = await this._usersService.findUserByEmail(payload.username)
        return { user_id: user?.id, username: payload.username, roles: [user?.accessLevel] }
    }
}
