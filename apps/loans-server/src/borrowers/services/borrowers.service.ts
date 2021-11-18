//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }               from '@nestjs/common'
import { InjectRepository }         from '@nestjs/typeorm'
import { CreateBorrowerDto }        from '@wv/loans-models'
import { UpdateBorrowerDto }        from '@wv/loans-models'
import { Repository }               from 'typeorm'
import { Borrower }                 from '../models/entities/borrower.entity'
import { Logger }                   from '@nestjs/common'


//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class BorrowersService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly _borrowersRepository: Repository<Borrower>
    private readonly _logger: Logger

    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(
        @InjectRepository(Borrower)
        pBorrowersRepository: Repository<Borrower>,
        pLogger: Logger
    )
    {
        this._borrowersRepository = pBorrowersRepository
        this._logger = pLogger
    }

    //---------------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------------
    async create(createBorrowerDto: CreateBorrowerDto)
    {
        this._logger.log(`Creating a new borrower with data: ${JSON.stringify(createBorrowerDto)}`)
        return this._borrowersRepository.save(createBorrowerDto)
    }
    //---------------------------------------------------------------------------
    async findAll(): Promise<Borrower[]>
    {
        this._logger.log('Retrieving all borrowers')
        return this._borrowersRepository.find()
    }
    //---------------------------------------------------------------------------
    async findOne(id: number)
    {
        this._logger.log(`Retrieving borrower with id: ${id}`)
        return this._borrowersRepository.findOne(id)
    }
    //---------------------------------------------------------------------------
    async update(id: number, updateBorrowerDto: UpdateBorrowerDto)
    {
        this._logger.log(`Updating borrower with id: ${id}`)
        return this._borrowersRepository.update(id, updateBorrowerDto)
    }
    //---------------------------------------------------------------------------
    async remove(id: number)
    {
        this._logger.log(`Removing borrower with id: ${id}`)
        return this._borrowersRepository.delete(id)
    }
}
