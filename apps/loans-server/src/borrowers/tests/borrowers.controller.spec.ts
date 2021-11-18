//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Test }                     from '@nestjs/testing'
import { TestingModule }            from '@nestjs/testing'
import { AppModule }                from '../../app/app.module'
import { BorrowersModule }          from '../borrowers.module'
import { TypeOrmModule }            from '@nestjs/typeorm'
import { JwtModule }                from '@nestjs/jwt'
import { BorrowersController }      from '../../borrowers/controllers/borrowers.controller'
import { UsersService }             from '../../users/services/users.service'
import { AuthService }              from '../../app/auth/services/auth.service'
import { BorrowersService }         from '../services/borrowers.service'
import { User }                     from '../../users/models/entities/user.entity'
import { Borrower }                 from '../models/entities/borrower.entity'
import { Logger }                   from '@nestjs/common'
import { secrets }                  from '../../app/auth/secrets/secrets'


//-------------------------------------------------------------------------------
// Tests Section
//-------------------------------------------------------------------------------
describe('BorrowersController', () =>
{
    let controller: BorrowersController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
                BorrowersModule,
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    database: secrets.db.dbName,
                    username: secrets.db.user,
                    password: secrets.db.password,
                    entities:  [__dirname + '/../../**/*.entity{.ts,.js}'],
                    keepConnectionAlive: true
                }),
                TypeOrmModule.forFeature([User]),
                TypeOrmModule.forFeature([Borrower]),
                JwtModule.register({
                    secret: secrets.jwt.jwtSecret,
                    signOptions: { expiresIn: secrets.jwt.jwtExpiration }
                }),
            ],
            controllers: [BorrowersController],
            providers: [BorrowersService, UsersService, AuthService, Logger]
        }).compile()

        controller = module.get<BorrowersController>(BorrowersController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
