//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }               from '@nestjs/common'
import { InjectRepository }         from '@nestjs/typeorm'
import { CreateUserDto }            from '@wv/loans-models'
import { UpdateUserDto }            from '@wv/loans-models'
import { Repository }               from 'typeorm'
import { User }                     from '../models/entities/user.entity'
import { Logger }                   from '@nestjs/common'


//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class UsersService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly _usersRepository: Repository<User>
    private readonly _logger: Logger


    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(
        @InjectRepository(User)
        pUsersRepository: Repository<User>,
        pLogger: Logger
    )
    {
        this._usersRepository = pUsersRepository
        this._logger = pLogger
    }


    //---------------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------------
    create(createUserDto: CreateUserDto)
    {
        this._logger.log(`Creating user: ${JSON.stringify(createUserDto)}`)
        return this._usersRepository.save(createUserDto)
    }
    //---------------------------------------------------------------------------
    findAll()
    {
        this._logger.log('Finding all users')
        return this._usersRepository.find()
    }
    //---------------------------------------------------------------------------
    findOne(id: number)
    {
        this._logger.log(`Finding user with id: ${id}`)
        return this._usersRepository.findOne(id)
    }
    //---------------------------------------------------------------------------
    findUserByEmail(pEmail: string)
    {
        this._logger.log(`Finding user with email: ${pEmail}`)
        return this._usersRepository.findOne({email: pEmail})
    }
    //---------------------------------------------------------------------------
    update(id: number, updateUserDto: UpdateUserDto)
    {
        this._logger.log(`Updating user with id: ${id}`)
        return this._usersRepository.update(id, updateUserDto)
    }
    //---------------------------------------------------------------------------
    remove(id: number)
    {
        this._logger.log(`Removing user with id: ${id}`)
        return this._usersRepository.delete(id)
    }
}
