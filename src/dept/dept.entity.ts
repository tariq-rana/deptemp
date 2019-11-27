import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmpEntity } from '../emp/emp.entity';

@Entity({name:"Dept"})
export class DeptEntity{
    @PrimaryGeneratedColumn({name:"DeptId"})
    deptId:number;

    @Column({name:"DeptName", unique:true})
    deptName:string;

    @OneToMany(type=> EmpEntity, emp => emp.dept)
    emp: EmpEntity[];
}


