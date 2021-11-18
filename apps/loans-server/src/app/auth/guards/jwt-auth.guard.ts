//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }                       from '@nestjs/common'
import { AuthGuard }                        from '@nestjs/passport'


//-------------------------------------------------------------------------------
// AuthGuard Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
