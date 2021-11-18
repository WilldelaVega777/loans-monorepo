//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { NestMiddleware }                   from '@nestjs/common'
import { Logger }                           from '@nestjs/common'
import { Request }                          from 'express'
import { Response }                         from 'express'
import { NextFunction }                     from 'express'

//-------------------------------------------------------------------------------
// Middleware Definition Section
//-------------------------------------------------------------------------------
export class LoggerMiddleware implements NestMiddleware
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private logger = new Logger('LIGHTSTREAM')

    use(request: Request, response: Response, next: NextFunction): void
    {
        const { ip, method, originalUrl } = request
        const userAgent = request.get('User-Agent') || ''

        response.on('finish', () => {
            const {statusCode} = response
            const contentLength = response.get('Content-Length') || 0

            this.logger.log(
                `${ip} - ${method} ${originalUrl} ${statusCode} ${contentLength}- ${userAgent}`
            )
            if (method !== 'GET')
            {
                this.logger.log(request.body)
            }
        })

        next()
    }
}
