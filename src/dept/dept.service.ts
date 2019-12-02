import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { DeptEntity } from './dept.entity';
import { DeptDTO } from './dept.dto';

@Injectable()
export class DeptService {
    constructor(
        @InjectRepository(DeptEntity) 
        private readonly deptRepository: Repository<DeptEntity>
    ){}
    

    async findAllDept(): Promise<DeptEntity[]> {
          return await this.deptRepository.find();
    }

    async findOneDept(deptId:number): Promise<any> {
        let retVal:any;
        await this.deptRepository.findOne(deptId)
        .then(dept =>{
            if(dept === undefined){
                retVal =  new HttpException("not found",HttpStatus.NOT_FOUND);
            }else{
                retVal = dept;
            }
        })
        .catch(err=> {
            retVal = {error:err.message};
        });
        return retVal;
    }

    async insertDept(deptDTO:DeptDTO):Promise<any>{
        let retVal:any;
        await this.deptRepository.save(deptDTO)
        .then(dept =>{
            if(dept === undefined){
                retVal =  new HttpException('Not found',HttpStatus.NOT_FOUND);
            }else{
                retVal = dept;
            }
        })
        .catch(err=> {
            retVal = {error:err.message};
        });
        return retVal;
    }

    async updateDept(deptId:number, deptDTO:DeptDTO):Promise<any>{
        let retVal:any;
        await this.deptRepository.update(deptId,deptDTO)
        .then(dept =>{
            if(dept === undefined){
                retVal =  new HttpException('Not found',HttpStatus.NOT_FOUND);
            }else{
                retVal = {deptId,...deptDTO};
            }
        })
        .catch(err=> {
            retVal = {error:err.message};
        });
        return retVal;
    }

    async deleteDept(deptId:number): Promise<any> {
        let retVal;

        await this.deptRepository.delete(deptId)
        .then(dept =>{
            if(dept === undefined){
                retVal =  new HttpException('Not found',HttpStatus.NOT_FOUND);
            }else{
                retVal = {deptId,deptName:"deleted"};
            }
        })
        .catch(err=> {
            retVal = {error:err.message};
        });
        return retVal;
    }

}
