
//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
// Modules
import { Module }                   from '@nestjs/common'
import { NestModule }               from '@nestjs/common'
import { MiddlewareConsumer }       from '@nestjs/common'
import { PassportModule }           from '@nestjs/passport'
import { JwtModule }                from '@nestjs/jwt'
import { LocalStrategy }            from './auth/strategies/local.strategy'
import { JwtStrategy }              from './auth/strategies/jwt.strategy'
import { secrets }                  from './auth/secrets/secrets'
import { TypeOrmModule }            from '@nestjs/typeorm'

// App Modules
import { UsersModule }              from '../users/users.module'
import { BorrowersModule }          from '../borrowers/borrowers.module'

// Controllers
import { AppController }            from './controllers/app.controller';

// Services
import { AppService }               from './services/app.service';
import { AuthService }              from './auth/services/auth.service'

// Entities
import { User }                     from '../users/models/entities/user.entity'
import { Borrower }                 from '../borrowers/models/entities/borrower.entity'

// Middlewares
import { LoggerMiddleware }         from './middlewares/logger.middleware';


//-------------------------------------------------------------------------------
// Module Definition Section
//-------------------------------------------------------------------------------
@Module({
    imports: [
        // DatabaseModule,
        PassportModule,
        JwtModule.register({
            secret: secrets.jwt.jwtSecret,
            signOptions: { expiresIn: secrets.jwt.jwtExpiration }
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            database: secrets.db.dbName,
            username: secrets.db.user,
            password: secrets.db.password,
            entities:  [
              Borrower,
              User
            ],
            keepConnectionAlive: true
        }),
        UsersModule,
        BorrowersModule
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService,
        AuthService,
        LocalStrategy,
        JwtStrategy
    ]
})
//-------------------------------------------------------------------------------
// Module Class Definition Section
//-------------------------------------------------------------------------------
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer)
    {
        consumer.apply(LoggerMiddleware).forRoutes('*')
    }
}
