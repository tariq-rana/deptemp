import { Controller, Get, Post, Body, Param, Patch, Delete  } from '@nestjs/common';
import { EmpService } from './emp.service';
import { EmpDTO } from './emp.dto';

@Controller('api/emp')
export class EmpController {

    constructor(private readonly empService:EmpService){}

    @Get()
    findAllEmp(){
        return this.empService.findAllEmp();
    }

    @Get(':id')
    findOneEmp(@Param('id') empId:number){
        return  this.empService.findOneEmp(empId);
    }

    @Post()
    insertEmp(@Body() empDTO:EmpDTO){
        return this.empService.insertEmp(empDTO);
    }

    @Patch(':id')
    updateEmp(@Param('id') empId:number, @Body() empDTO:Partial<EmpDTO>){
        return this.empService.updateEmp(empId,empDTO);
    }

    @Delete(':id')
    deleteEmp(empId:number){
        return this.empService.deleteEmp(empId);
    }

}
