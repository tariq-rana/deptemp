import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { DeptService } from './dept.service';
import { DeptDTO } from './dept.dto';
import { DeptEntity } from './dept.entity';

@Controller('api/dept')
export class DeptController {
     constructor(private readonly deptService:DeptService){}


    @Get()
    findAllDept():Promise<DeptEntity[]> {
        return this.deptService.findAllDept();
   }

    @Get(':id')
    findOneDept(@Param('id') deptId:number):Promise<DeptEntity>{
        return this.deptService.findOneDept(deptId);
    }

     @Post()
     insertDept(@Body() dept:DeptDTO){
           return this.deptService.insertDept(dept); 
     }

    @Patch(':id')
    async updateDept(@Param('id') deptId:number,@Body() dept:DeptDTO ){
        return await this.deptService.updateDept(deptId,dept);
    }

    @Delete(':id')
    deleteDept(@Param('id') deptId:number){
         return  this.deptService.deleteDept(deptId);
    }
}
