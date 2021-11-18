//-------------------------------------------------------------------------------
// Exlint Configuration Section
//-------------------------------------------------------------------------------
/* eslint-disable @typescript-eslint/no-explicit-any */
//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Request }                          from '@nestjs/common'
import { Get }                              from '@nestjs/common'
import { Post }                             from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Patch }                            from '@nestjs/common'
import { Param }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { UseGuards }                        from '@nestjs/common'
import { BadRequestException }              from '@nestjs/common'
import { BorrowersService }                 from '../services/borrowers.service'
import { CreateBorrowerDto }                from '@wv/loans-models'
import { UpdateBorrowerDto }                from '@wv/loans-models'
import { JwtAuthGuard }                     from '../../app/auth/guards/jwt-auth.guard'
import { Roles }                            from '../../app/auth/decorators/roles.decorator'
import { Role }                             from '../../app/auth/models/role.enum'
import { RolesGuard }                       from '../../app/auth/guards/roles.guard'


//-------------------------------------------------------------------------------
// Controller Section
//-------------------------------------------------------------------------------
@Controller('borrowers')
export class BorrowersController
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly _borrowersService: BorrowersService


    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(pBorrowersService: BorrowersService)
    {
        this._borrowersService = pBorrowersService
    }


    //---------------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------------
    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Manager)
    async create(@Request() request: Request, @Body() createBorrowerDto: CreateBorrowerDto)
    {
        try
        {
            const user = (<any>request).user
            createBorrowerDto.user_id = user.user_id
            console.log(createBorrowerDto)
            await this._borrowersService.create(createBorrowerDto)
        }
        catch (error)
        {
            throw new BadRequestException((<any>error).message)
        }
    }
    //---------------------------------------------------------------------------
    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll()
    {
        return this._borrowersService.findAll()
    }
    //---------------------------------------------------------------------------
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id') id: string)
    {
        return this._borrowersService.findOne(+id)
    }
    //---------------------------------------------------------------------------
    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    update(@Param('id') id: string, @Body() updateBorrowerDto: UpdateBorrowerDto)
    {
        return this._borrowersService.update(+id, updateBorrowerDto)
    }
    //---------------------------------------------------------------------------
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    remove(@Param('id') id: string)
    {
        return this._borrowersService.remove(+id)
    }
}
