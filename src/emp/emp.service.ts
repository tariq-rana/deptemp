import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EmpEntity } from './emp.entity';
import { EmpDTO } from './emp.dto';

@Injectable()
export class EmpService {
    constructor(@InjectRepository(EmpEntity) private readonly empRepository:Repository<EmpEntity> ){}

    async findAllEmp(){
        let retVal:any;
        await this.empRepository.find({relations:['dept']})
            .then(emps => {
                if(emps === undefined){
                    retVal = new HttpException('Not Found',HttpStatus.NOT_FOUND);
                }
                else{
                    retVal = emps
                }
            })

        return retVal;
    }

    async findOneEmp(empId:number){
        let retVal:any;
        await this.empRepository.findOne(empId,{relations:['dept']})
            .then(emp => {
                if(emp === undefined){
                    retVal = new HttpException('Not Found',HttpStatus.NOT_FOUND);
                }
                else{
                    retVal = emp
                }
            })

        return retVal;
        
    }

    async insertEmp(empDTO:EmpDTO){3 
        let retVal:any;
        await this.empRepository.save(empDTO)
            .then(emp => {
                if(emp === undefined){
                    retVal = new HttpException('Not Found',HttpStatus.NOT_FOUND);
                }
                else{
                    retVal = emp
                }
            })

        return retVal;
    }

    async updateEmp(empId:number, empDTO:Partial<EmpDTO>){
        let retVal:any;
        await this.empRepository.update(empId,empDTO)
        .then(emp =>{
            if(emp === undefined){
                retVal =  new HttpException('Not found',HttpStatus.NOT_FOUND);
            }else{
                retVal = {empId,...empDTO};
            }
        })
        .catch(err=> {
            retVal = err.message;
        });
        return retVal;
    }

    async deleteEmp(empId:number){
        let retVal:any;
        await this.empRepository.delete(empId)
        .then(emp => {
            if(emp === undefined){
                retVal = new HttpException('Not Found',HttpStatus.NOT_FOUND);
            }
            else{
                retVal = emp
            }
        })

        return retVal;
    }


}
