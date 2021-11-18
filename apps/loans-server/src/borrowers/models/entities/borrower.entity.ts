//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Entity }                               from 'typeorm'
import { Unique }                               from 'typeorm/decorator/Unique'
import { Column }                               from 'typeorm'
import { PrimaryGeneratedColumn }               from 'typeorm'

//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
@Entity()
@Unique(['email'])
export class Borrower
{
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ length: 50 })
    firstName!: string

    @Column({ length: 50 })
    lastName!: string

    @Column({ length: 50 })
    email!: string

    @Column({ length: 11 })
    ssn!: string

    @Column({ length: 10 })
    phoneNumber!: string

    @Column({ length: 4 })
    lastFourOfDrivingLicense!: string

    @Column({type: 'double', default: 0})
    salary!: number

    @Column({type: 'double', default: 0})
    loanAmount!: number

    @Column({type: 'double', default: 0})
    loanInterest!: number

    @Column({type: 'double', default: 0})
    loanTerm!: number

    @Column({ length: 50 })
    employerName!: string

    @Column({ length: 150 })
    employerAddress!: string

    @Column({ length: 10 })
    employerPhoneNumber!: string

    @Column({
        type: 'bigint',
        default: 0,
    })
    user_id!: number
}

