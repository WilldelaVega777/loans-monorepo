//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Test }                     from '@nestjs/testing'
import { TestingModule }            from '@nestjs/testing'
import { AppModule }                from '../../app/app.module'
import { TypeOrmModule }            from '@nestjs/typeorm'
import { JwtModule }                from '@nestjs/jwt'
import { UsersController }          from '../../users/controllers/users.controller'
import { UsersService }             from '../../users/services/users.service'
import { AuthService }              from '../../app/auth/services/auth.service'
import { User }                     from '../models/entities/user.entity'
import { Logger }                   from '@nestjs/common'
import { secrets }                  from '../../app/auth/secrets/secrets'


//-------------------------------------------------------------------------------
// Tests Section
//-------------------------------------------------------------------------------
describe('UsersController', () =>
{
    let controller: UsersController
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
            controllers: [UsersController],
            providers: [UsersService, AuthService, Logger]
        }).compile()

        service = module.get<UsersService>(UsersService)
        controller = module.get<UsersController>(UsersController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = Promise.resolve([
                {
                    "id": 1,
                    "fullName": "John Doe",
                    "email": "john.doe@email.com",
                    "password": "DoesSomething",
                    "accessLevel": 0,
                    "createdAt": "2021-11-03T14:15:23.000Z"
                }
            ])
            jest.spyOn(service, 'findAll').mockImplementation(() => result as Promise<any[]>)

            expect(await controller.findAll()).toStrictEqual([
                {
                    "id": 1,
                    "fullName": "John Doe",
                    "email": "john.doe@email.com",
                    "password": "DoesSomething",
                    "accessLevel": 0,
                    "createdAt": "2021-11-03T14:15:23.000Z"
                }
            ])
        });
    });
})
