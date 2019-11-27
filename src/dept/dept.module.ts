import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DeptEntity } from './dept.entity';
import { DeptController } from './dept.controller';
import { DeptService } from './dept.service';

@Module({
    imports: [TypeOrmModule.forFeature([DeptEntity])],
    controllers: [DeptController],
    providers: [DeptService]

})
export class DeptModule {}
