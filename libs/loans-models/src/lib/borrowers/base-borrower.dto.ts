//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class BaseBorrowerDto
{
  id?                          : number

  firstName!                   : string
  lastName!                    : string

  email!                       : string
  ssn!                         : string
  phoneNumber!                 : string
  lastFourOfDrivingLicense!    : string

  salary!                      : number
  loanAmount!                  : number
  loanInterest!                : number
  loanTerm!                    : number

  employerName!                : string
  employerAddress!             : string
  employerPhoneNumber!         : string

  user_id?                     : number
}
