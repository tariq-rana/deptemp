import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DeptEntity } from '../dept/dept.entity';
import { EmpEntity } from './emp.entity';
import { EmpService } from './emp.service';
import { EmpController } from './emp.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([DeptEntity,EmpEntity])
  ],
  controllers: [EmpController],
  providers: [EmpService]
})
export class EmpModule {}
