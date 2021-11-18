//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Test }                     from '@nestjs/testing'
import { TestingModule }            from '@nestjs/testing'
import { AppModule }                from '../../app/app.module'
import { TypeOrmModule }            from '@nestjs/typeorm'
import { JwtModule }                from '@nestjs/jwt'
import { UsersService }             from '../../users/services/users.service'
import { BorrowersService }         from '../services/borrowers.service'
import { AuthService }              from '../../app/auth/services/auth.service'
import { User }                     from '../../users/models/entities/user.entity'
import { Borrower }                 from '../models/entities/borrower.entity'
import { Logger }                   from '@nestjs/common'
import { secrets }                  from '../../app/auth/secrets/secrets'


//-------------------------------------------------------------------------------
// Test Definition Section
//-------------------------------------------------------------------------------
describe('BorrowersService', () =>
{
    let service: BorrowersService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
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
            providers: [BorrowersService, UsersService, AuthService, Logger]
        }).compile()

        service = module.get<BorrowersService>(BorrowersService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
});
