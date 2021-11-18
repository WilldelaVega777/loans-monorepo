//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';


//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class UpdateUserDto extends PartialType(CreateUserDto) {}
