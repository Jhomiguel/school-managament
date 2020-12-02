import {InputType,Field} from '@nestjs/graphql'
import {MinLength } from 'class-validator'


@InputType()
export class CreateStudentInput {
    @MinLength(2)
    @Field()
    name: string

    @MinLength(2)
    @Field()
    lastName: string
}