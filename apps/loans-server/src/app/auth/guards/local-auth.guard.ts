//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }                       from '@nestjs/common'
import { AuthGuard }                        from '@nestjs/passport'


//-------------------------------------------------------------------------------
// Guard Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
