//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Entity }                               from 'typeorm'
import { Column }                               from 'typeorm'
import { BeforeInsert }                         from 'typeorm'
import { PrimaryGeneratedColumn }               from 'typeorm'
import { Unique }                               from 'typeorm/decorator/Unique'

//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
@Entity()
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({ length: 500 })
    fullName!: string

    @Column({ length: 500 })
    email!: string

    @Column({ length: 500 })
    password!: string

    @Column({type: 'int', default: 0})
    accessLevel?: number

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp'
      })
    createdAt?: Date

    @BeforeInsert()
    updateCreatedAt() {
        this.createdAt = new Date()
    }
}

