//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Test }                     from '@nestjs/testing'
import { TestingModule }            from '@nestjs/testing'
import { AppModule }                from '../../app/app.module'
import { TypeOrmModule }            from '@nestjs/typeorm'
import { JwtModule }                from '@nestjs/jwt'
import { UsersService }             from '../../users/services/users.service'
import { AuthService }              from '../../app/auth/services/auth.service'
import { User }                     from '../models/entities/user.entity'
import { Logger }                   from '@nestjs/common'
import { secrets }                  from '../../app/auth/secrets/secrets'


//-------------------------------------------------------------------------------
// Test Definition Section
//-------------------------------------------------------------------------------
describe('UsersService', () =>
{
    let service: UsersService

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
                JwtModule.register({
                    secret: secrets.jwt.jwtSecret,
                    signOptions: { expiresIn: secrets.jwt.jwtExpiration }
                }),
            ],
            providers: [UsersService, AuthService, Logger]
        }).compile()

        service = module.get<UsersService>(UsersService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
});
