//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Get }                              from '@nestjs/common'
import { Post }                             from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Patch }                            from '@nestjs/common'
import { Param }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { UseGuards }                        from '@nestjs/common'
import { BadRequestException }              from '@nestjs/common'
import { UsersService }                     from '../services/users.service'
import { CreateUserDto }                    from '@wv/loans-models'
import { UpdateUserDto }                    from '@wv/loans-models'
import { JwtAuthGuard }                     from '../../app/auth/guards/jwt-auth.guard'
import { Roles }                            from '../../app/auth/decorators/roles.decorator'
import { Role }                             from '@wv/loans-models'
import { RolesGuard }                       from '../../app/auth/guards/roles.guard'


//-------------------------------------------------------------------------------
// Controller Section
//-------------------------------------------------------------------------------
@Controller('users')
export class UsersController {

    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly _usersService: UsersService


    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(
        pUsersService: UsersService
    )
    {
        this._usersService = pUsersService
    }


    //---------------------------------------------------------------------------
    // Controller Methods Section
    //---------------------------------------------------------------------------
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createUserDto: CreateUserDto)
    {
        try
        {
            await this._usersService.create(createUserDto)
        }
        catch (error)
        {
            throw new BadRequestException(error.message)
        }
    }
    //---------------------------------------------------------------------------
    @Get()
    @UseGuards(JwtAuthGuard)
    findAll()
    {
        return this._usersService.findAll()
    }
    //---------------------------------------------------------------------------
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id') id: string)
    {
        return this._usersService.findOne(+id)
    }
    //---------------------------------------------------------------------------
    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto)
    {
        return this._usersService.update(+id, updateUserDto)
    }
    //---------------------------------------------------------------------------
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    remove(@Param('id') id: string) {
        return this._usersService.remove(+id)
    }
}
