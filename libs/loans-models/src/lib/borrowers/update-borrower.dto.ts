//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { PartialType }              from '@nestjs/mapped-types';
import { CreateBorrowerDto }        from './create-borrower.dto';


//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class UpdateBorrowerDto extends PartialType(CreateBorrowerDto)
{

}
