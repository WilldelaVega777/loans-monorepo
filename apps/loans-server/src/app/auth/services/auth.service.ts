//---------------------------------------------------------------------
// Per File Settings for ESLint (https://eslint.org/)
//---------------------------------------------------------------------
/* eslint-disable @typescript-eslint/no-unused-vars */

//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }               from '@nestjs/common'
import { UsersService }             from '../../../users/services/users.service'
import { JwtService }               from '@nestjs/jwt'


//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class AuthService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private _usersService: UsersService
    private _jwtService: JwtService

    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(
        pUsersService: UsersService,
        pJWTService: JwtService
    )
    {
        this._usersService = pUsersService
        this._jwtService = pJWTService
    }

    //---------------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------------
    async validateUser(email: string, pass: string): Promise<any>
    {
        const user = await this._usersService.findUserByEmail(email)

        if (user && user.password === pass)
        {
            const { password, ...result } = user;
            return result
        }
        return null
    }
    //---------------------------------------------------------------------------
    async login(user: any)
    {
        const payload = { userid: user.id, username: user.email, role: user.accessLevel }
        return {
            access_token: this._jwtService.sign(payload)
        }
    }
}
