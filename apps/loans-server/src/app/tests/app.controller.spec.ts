//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Test }                     from '@nestjs/testing'
import { TestingModule }            from '@nestjs/testing'
import { AppModule }                from '../app.module'
import { UsersModule }              from '../../users/users.module'
import { TypeOrmModule }            from '@nestjs/typeorm'
import { JwtModule }                from '@nestjs/jwt'
import { secrets }                  from '../auth/secrets/secrets'
import { AppController }            from '../controllers/app.controller'
import { AuthService }              from '../auth/services/auth.service'
import { AppService }               from '../services/app.service'
import { Logger }                   from '@nestjs/common'


//-------------------------------------------------------------------------------
// Tests Section
//-------------------------------------------------------------------------------
describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
                UsersModule,
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'loans',
                    password: 'Z0rr1t022',
                    database: 'loans',
                    entities:  [__dirname + '/../../**/*.entity{.ts,.js}'],
                    keepConnectionAlive: true
                }),
                JwtModule.register({
                    secret: secrets.jwt.jwtSecret,
                    signOptions: { expiresIn: '24h' }
                }),
            ],
            controllers: [AppController],
            providers: [AppService, AuthService, Logger]
        }).compile();

        appController = app.get<AppController>(AppController);
    })
    //-------------------------------------------------------------------------------
    describe('root', () => {
        it('should return "Healthy Service"', () => {
            expect(appController.healthCheck()).toBe('Healthy Service');
        })
    })
})
