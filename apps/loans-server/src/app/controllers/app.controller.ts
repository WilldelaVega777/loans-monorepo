//-------------------------------------------------------------------------------
// Exlint Configuration Section
//-------------------------------------------------------------------------------
/* eslint-disable @typescript-eslint/no-explicit-any */
//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Get }                              from '@nestjs/common'
import { Post }                             from '@nestjs/common'
import { Request }                          from '@nestjs/common'
import { UseGuards }                        from '@nestjs/common'
import { AppService }                       from '../services/app.service'
import { LocalAuthGuard }                   from '../auth/guards/local-auth.guard'
import { JwtAuthGuard }                     from '../auth/guards/jwt-auth.guard'
import { AuthService }                      from '../auth/services/auth.service'


//-------------------------------------------------------------------------------
// Controller Section
//-------------------------------------------------------------------------------
@Controller()
export class AppController
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly _appService: AppService
    private readonly _authService: AuthService

    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService
    )
    {
        this._appService = appService
        this._authService = authService
    }


    //---------------------------------------------------------------------------
    // Controller Methods Section
    //--------------------------------------------------------------------------
    // Security Controller Methods Section
    //--------------------------------------------------------------------------
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() request: Request)
    {
        const token = await this._authService.login((<any>request).user)
        return {
            ...(<any>request).user,
            ...token
        }
    }

    //---------------------------------------------------------------------------
    // HealthCheck Methods Section
    //---------------------------------------------------------------------------
    @Get('/healthcheck')
    healthCheck(): string
    {
        return this.appService.getHealthCheck()
    }
    //---------------------------------------------------------------------------
    @UseGuards(JwtAuthGuard)
    @Get('/healthcheck-secured')
    healthCheckSecure(): string
    {
        return this.appService.getHealthCheck()
    }
}
