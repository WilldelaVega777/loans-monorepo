//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Role }                 from "@wv/loans-models"

//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class BaseUserDto {
    //-----------------------------------------------------------------
    // Public Fields Section
    //-----------------------------------------------------------------
    id?                  : number
    fullName!            : string
    email!               : string
    password!            : string
    accessLevel!         : number
    createdAt?           : Date
    role?                : Role[]
    updateCreatedAt?     : () => void
}
