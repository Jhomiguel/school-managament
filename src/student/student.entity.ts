import {Entity, Column, PrimaryColumn, ObjectIdColumn} from 'typeorm'

@Entity()
export class Student{
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    name: string
 
    @Column()
    lastName: string
}