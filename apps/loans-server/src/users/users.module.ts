//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Module }               from '@nestjs/common'
import { TypeOrmModule }            from '@nestjs/typeorm'

// Controllers
import { UsersController }      from './controllers/users.controller'

// Services
import { UsersService }         from './services/users.service'
import { Logger }               from '@nestjs/common'

// Entities
import { User } from './models/entities/user.entity'

//-------------------------------------------------------------------------------
// Module Declaration Section
//-------------------------------------------------------------------------------
@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService,
        Logger
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
