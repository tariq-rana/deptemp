import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeptModule } from './dept/dept.module';
import { EmpModule } from './emp/emp.module';

import { DeptEntity } from './dept/dept.entity';
import { EmpEntity } from './emp/emp.entity';


@Module({
  imports: [
    //TypeOrmModule.forRoot(),
  TypeOrmModule.forRoot({
        type: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'DeptEmp',
        password: 'DeptEmp',
        database: 'DeptEmp',
        entities: [DeptEntity,EmpEntity],
        synchronize: true,
      }),

    DeptModule,
    EmpModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'DeptEmp',
    //   password: 'DeptEmp',
    //   database: 'DeptEmp',
    //   entities: ["dist/**/*.entity{.ts,.js}"],
    //   synchronize: true,
    // }),