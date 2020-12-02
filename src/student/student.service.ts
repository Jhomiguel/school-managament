import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import {v4 as uuid} from 'uuid'

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) 
        private studentRepository: Repository <Student>
    ){}
    
    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const {name,lastName} = createStudentInput
        const student= this.studentRepository.create({
            id: uuid(),
            name,
            lastName
        })

        return this.studentRepository.save(student)
    }
     
    async getStudentById(id: string): Promise<Student> {
        return this.studentRepository.findOne({id})
    }

    async getStudents(): Promise<Student[]> {
       return this.studentRepository.find({})
    }

    async getManyStudents(studentsIds:string[]): Promise<Student[]>{
        return await this.studentRepository.find({
            where:{
                id:{
                    $in: studentsIds
                }
            }
        })

    }   
}
