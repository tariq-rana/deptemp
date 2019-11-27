import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeptModule } from './dept/dept.module';
import { EmpModule } from './emp/emp.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
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