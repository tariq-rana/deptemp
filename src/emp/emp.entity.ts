import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";
import { DeptEntity } from "../dept/dept.entity";

@Entity({name:"Emp"})
export class EmpEntity{
    @PrimaryGeneratedColumn({name:"EmpId"})
    empId:number;

    @Column({name:"EmpName",unique:true})
    empName:string;

    @Column({name:"MailId",unique:true})
    mailId:string;

    @Column({name:"JoinDate", type:"datetime"})
    joinDate:Date;

    @ManyToOne(type => DeptEntity, dept => dept.emp)
    @JoinColumn({name:"DeptId"})
    dept:Partial<DeptEntity>;
}