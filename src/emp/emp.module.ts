import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpEntity } from './emp.entity';
import { EmpService } from './emp.service';
import { EmpController } from './emp.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([EmpEntity])
  ],
  controllers: [EmpController],
  providers: [EmpService]
})
export class EmpModule {}
