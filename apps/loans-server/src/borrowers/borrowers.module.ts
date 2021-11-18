//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Module }                       from '@nestjs/common'
import { TypeOrmModule }                from '@nestjs/typeorm'

// Controllers
import { BorrowersController }          from './controllers/borrowers.controller'

// Services
import { BorrowersService }             from './services/borrowers.service'
import { Logger }                       from '@nestjs/common'

// Entities
import { Borrower }                     from './models/entities/borrower.entity'


//-------------------------------------------------------------------------------
// Module Definition Section
//-------------------------------------------------------------------------------
@Module({
    imports: [
        TypeOrmModule.forFeature([Borrower])
    ],
    controllers: [
        BorrowersController
    ],
    providers: [
        BorrowersService,
        Logger
    ]
})
export class BorrowersModule {}
